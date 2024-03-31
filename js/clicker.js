let tapCount = 0;
let lastScore = 0;  // To keep track of the highest score
let countdownValue = 10; // Starting countdown value
let countdownInterval;
let timerInterval; // Interval for the timer display
let challengeActive = false;
let challengeThreshold = 100; // Initial threshold for challenge appearance, can be randomized later
let gameStarted = false;
let startTime = null;
let lastTime = 0; // To keep track of the last run time
let scoreToSave = 0;
let bannedWords = [];

function getBannedWords() {
    return new Promise((resolve, reject) => {
        const db = window.db;
        const bannedWordsRef = window.firebaseRef(db, 'bannedWords/');
        window.firebaseOnValue(bannedWordsRef, (snapshot) => {
            bannedWords = Object.values(snapshot.val() || {}).map(item => Object.values(item)[0]);
            console.log("Banned words loaded:", bannedWords);
            if (bannedWords.length > 0) {
                resolve(bannedWords); // Resolve with the banned words
            } else {
                reject(new Error("No banned words found"));
            }
        });
    });
}

function checkForBannedWords(nickname) {
    console.log("Checking for banned words in nickname:", nickname);
    for (const word of bannedWords) {
        if (nickname.toLowerCase().includes(word.toLowerCase())) {
            console.log("Banned word found:", word); // Debug log to verify which banned word was found
            alert("Your nickname contains a banned word. Please choose another nickname.");
            return false;
        }
    }
    return true;
}

const tapCountDisplay = document.getElementById('tapCount');
const countdownDisplay = document.getElementById('countdown');
const clickableImage = document.getElementById('clickableImage');
const gameOverMessage = document.getElementById('gameOverMessage');
const gameOverText = document.getElementById('gameOverText');
const restartButton = document.getElementById('restartButton');
const scoreEntry = document.getElementById('scoreEntry');
const leaderboardWindow = document.getElementById('leaderboardWindow');
const toggleLeaderboard = document.getElementById('toggleLeaderboard');

document.addEventListener('DOMContentLoaded', () => {
    const storedLastScore = localStorage.getItem('lastScore');
    const storedLastTime = localStorage.getItem('lastTime');

    lastScore = storedLastScore ? parseInt(storedLastScore, 10) : 0;
    lastTime = storedLastTime ? parseInt(storedLastTime, 10) : 0;

    document.getElementById('lastRecord').textContent = `${lastTime}s`;
    tapCountDisplay.textContent = `Taps: ${tapCount} | Last Score: ${lastScore}`;

    // Fetch banned words when the document loads
    getBannedWords().then(() => {
        console.log("Banned words are loaded.");
    }).catch(error => {
        console.error("Error loading banned words:", error);
    });
});

function updateTapDisplay() {
    tapCountDisplay.textContent = `Taps: ${tapCount} | Last Score: ${lastScore}`;
}

function updateTimerDisplay() {
    if (gameStarted) {
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = `${timeElapsed}s`;
    }
}

function resetGame() {
    clearInterval(timerInterval);
    const currentScore = tapCount;
    scoreToSave = currentScore; // Store the score before resetting
    lastTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('lastRecord').textContent = `${lastTime}s`;
    gameStarted = false;

    // Determine the message and whether to show the score entry field based on the current score
    let message = "Bastion's grandma can tap longer than you, come on!";
    if (currentScore > lastScore) {
        lastScore = currentScore;
        localStorage.setItem('lastScore', lastScore.toString());
        message = "New high score! Enter your name to save your record.";
        scoreEntry.style.display = 'block'; // Show the score entry for new high score
    } else {
        scoreEntry.style.display = 'none'; // Hide the score entry if not a new high score
        if (currentScore >= 1000 && currentScore < 3000) {
            message = "Good job! I mean, 'good' is a relative term, so...";
        } else if (currentScore >= 3000 && currentScore < 5000) {
            message = "That's the spirit! You remind me of that guy Sterling -- so persistent! By the way, where did he go?";
        } else if (currentScore >= 5000 && currentScore < 6000) {
            message = "You made it to this threshold?! Nice.";
        }
    }

    gameOverText.textContent = message;
    gameOverMessage.style.display = 'flex';

    updateTapDisplay();
    tapCount = 0;
    adjustCountdownValue();
    clearInterval(countdownInterval);
    countdownInterval = null;
    countdownDisplay.style.display = 'none';

    challengeActive = false;
}

function saveScore() {
    const nickname = document.getElementById('playerName').value.trim();
    if (nickname.length === 0) {
        alert("ENTER YOUR NICKNAME");
        return;
    }

    if (!checkForBannedWords(nickname)) {
        alert("What?");
        return; // Make sure to exit the function here to prevent saving
    }

    // If nickname is valid, proceed to save the score
    const score = scoreToSave;
    const db = window.db;
    const scoresRef = window.firebaseRef(db, 'scores/');
    const newScoreRef = window.firebasePush(scoresRef);
    window.firebaseSet(newScoreRef, {
        nickname: nickname,
        score: score,
        timestamp: window.firebaseServerTimestamp()
    });

    scoreEntry.style.display = 'none';
    gameOverMessage.style.display = 'none';
}




leaderboardWindow.addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

toggleLeaderboard.addEventListener('click', function() {
    const display = leaderboardWindow.style.display;
    leaderboardWindow.style.display = display === 'none' || display === '' ? 'flex' : 'none';
    if (leaderboardWindow.style.display !== 'none') {
        getScores();
    }
});


function getScores() {
    const db = window.db;
    const scoresRef = window.firebaseRef(db, 'scores/');
    window.firebaseOnValue(scoresRef, (snapshot) => {
        const scores = snapshot.val();
        const scoresListWindow = document.getElementById('scoresListWindow');
        scoresListWindow.innerHTML = ''; // Ensure this element is correctly targeted

        const sortedScores = Object.values(scores).sort((a, b) => b.score - a.score).slice(0, 15);

        sortedScores.forEach((score) => {
            const div = document.createElement('div');
            div.textContent = `${score.nickname}: ${score.score}`;
            scoresListWindow.appendChild(div);
        });
    });
}

function adjustCountdownValue() {
    countdownValue = 10 - Math.min(8, Math.floor(tapCount / 1000));
}

function updateCountdown() {
    countdownDisplay.textContent = `Reset in: ${countdownValue} seconds`;
    if (countdownValue <= 0) {
        resetGame();
    } else {
        countdownValue--;
    }
}

function startCountdown() {
    if (!countdownInterval) {
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

clickableImage.addEventListener('click', (e) => {
    if (!gameStarted) {
        gameStarted = true;
        startTime = Date.now(); // Reset startTime on new game start
        timerInterval = setInterval(updateTimerDisplay, 1000);
        startCountdown();
    }

    tapCount++;
    updateTapDisplay();
    adjustCountdownValue();
    startCountdown();

    const rect = clickableImage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = 20 * ((clickX / centerX) - 1);
    const rotateX = -20 * ((clickY / centerY) - 1);
    clickableImage.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    setTimeout(() => {
        clickableImage.style.transform = '';
    }, 200);

    if (!challengeActive) {
        checkForChallenge();
        if (tapCount === 2) {
            showBonusImage();
        }
    }
});

function showBonusImage() {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    bonusImage.style.display = 'block';
    bonusImage.style.position = 'absolute';
    bonusImage.style.left = `calc(50% + ${x}px)`;
    bonusImage.style.top = `calc(50% + ${y}px)`;
    bonusImage.style.transform = 'translate(-50%, -50%)';
}

restartButton.addEventListener('click', () => {
    gameStarted = false;
    tapCount = 0;
    adjustCountdownValue();
    tapCountDisplay.textContent = `Taps: ${tapCount}`;
    countdownDisplay.textContent = '';
    gameOverMessage.style.display = 'none';
    clearInterval(timerInterval); // Stop the timer when the game is restarted
    startCountdown();
});

bonusImage.addEventListener('click', (event) => {
    event.stopPropagation();
    const bonus = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    tapCount += bonus;
    updateTapDisplay();
    bonusImage.style.display = 'none';
    if (!countdownInterval) {
        startCountdown();
    }
});

function showChallenge() {
    challengeActive = true;
    challengeQuestion.style.display = 'block';
}

function checkForChallenge() {
    if (tapCount >= challengeThreshold && !challengeActive) {
        showChallenge();
    }
}

function answerChallenge(answer) {
    if (answer) {
        console.log("Correct answer");
    } else {
        console.log("Wrong answer");
        resetGame();
    }
    challengeQuestion.style.display = 'none';
    challengeActive = false;
}