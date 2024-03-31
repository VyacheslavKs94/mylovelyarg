let tapCount = 0;
let lastScore = 0;  
let countdownValue = 10; 
let countdownInterval;
let timerInterval; 
let challengeActive = false;
let challengeThreshold = 100; 
let gameStarted = false;
let startTime = null;
let lastTime = 0; 
let scoreToSave = 0;
let bannedWords = [];

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
    getBannedWords()
        .then(() => {
            saveScore(); 
        })
        .catch((error) => {
            console.error('Error fetching banned words:', error);
        });
});

function getBannedWords() {
    return new Promise((resolve, reject) => {
        const db = window.db;
        const bannedWordsRef = window.firebaseRef(db, 'bannedWords/');
        window.firebaseOnValue(bannedWordsRef, (snapshot) => {
            bannedWords = Object.values(snapshot.val() || {});
            resolve(); 
        });
    });
}

function checkForBannedWords(nickname) {
    return new Promise((resolve, reject) => {
        for (const word of bannedWords) {
            if (nickname.toLowerCase().includes(word.toLowerCase())) {
                alert("Your nickname contains a banned word. Please choose another nickname.");
                reject(); 
                return;
            }
        }
        resolve();
    });
}

function saveScore() {
    const nickname = document.getElementById('playerName').value;
    if (nickname.length === 0) {
        alert("ENTER YOUR NICKNAME");
        return;
    }

    checkForBannedWords(nickname)
        .then(() => {
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
        })
        .catch(() => {
            alert("Your nickname contains a banned word. Please choose another nickname.");
            document.getElementById('playerName').value = "";
        });
}

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
    scoreToSave = currentScore; 
    lastTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('lastRecord').textContent = `${lastTime}s`;
    gameStarted = false;

    let message = "Bastion's grandma can tap longer than you, come on!";
    if (currentScore > lastScore) {
        lastScore = currentScore;
        localStorage.setItem('lastScore', lastScore.toString());
        message = "New high score! Enter your name to save your record.";
        scoreEntry.style.display = 'block'; 
    } else {
        scoreEntry.style.display = 'none'; 
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
        scoresListWindow.innerHTML = ''; 

        const sortedScores = Object.values(scores).sort((a, b) => b.score - a.score).slice(0, 15);

        sortedScores.forEach((score) => {
            checkForBannedWords(score.nickname)
                .then(() => {
                    const div = document.createElement('div');
                    div.textContent = `${score.nickname}: ${score.score}`;
                    scoresListWindow.appendChild(div);
                })
                .catch(() => {
                    console.log(`Nickname "${score.nickname}" contains a banned word, skipping.`);
                });
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
        startTime = Date.now(); 
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
    clearInterval(timerInterval); 
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
