let tapCount = 0;
let lastScore = 0;  // To keep track of the highest score
let countdownValue = 10; // Starting countdown value
let countdownInterval;
let challengeActive = false;
let challengeThreshold = 100; // Initial threshold for challenge appearance, can be randomized later

const tapCountDisplay = document.getElementById('tapCount');
const countdownDisplay = document.getElementById('countdown');
const clickableImage = document.getElementById('clickableImage');
const gameOverMessage = document.getElementById('gameOverMessage');
const gameOverText = document.getElementById('gameOverText');
const restartButton = document.getElementById('restartButton');
const scoreEntry = document.getElementById('scoreEntry'); // Ensure this element exists in your HTML

// Update the display of taps and last score
function updateTapDisplay() {
    tapCountDisplay.textContent = `Taps: ${tapCount} | Last Score: ${lastScore}`;
}

function resetGame() {
    if (tapCount > lastScore) {
        lastScore = tapCount; // Update last score if current taps are higher
    }
    let message = "Bastion's grandma can tap longer than you, come on!";
    if (tapCount >= 1000 && tapCount < 3000) {
        message = "Good job! I mean, 'good' is a relative term, so...";
    } else if (tapCount >= 3000 && tapCount < 5000) {
        message = "That's the spirit! You remind me of that guy Sterling -- so persistent! By the way, where did he go?";
    } else if (tapCount >= 5000 && tapCount < 6000) {
        message = "You made it to this threshold?! Nice.";
    }

    gameOverText.textContent = message;
    gameOverMessage.style.display = 'flex';
    scoreEntry.style.display = 'block'; // Show the score entry on game over

    updateTapDisplay();
    tapCount = 0;
    adjustCountdownValue();
    clearInterval(countdownInterval);
    countdownInterval = null;
    countdownDisplay.style.display = 'none'; // Hide countdown on game over

    challengeActive = false; // Reset challenge state on game reset
}

function saveScore() {
    const nickname = document.getElementById('playerName').value;
    if (nickname.length === 0) {
        alert("Please enter a name.");
        return;
    }
    const score = lastScore; // Use the last score for saving

    // Save the score to Firebase
    // Assuming window.firebaseRef, window.firebaseSet, etc., are defined in firebase-init.js
    const db = window.db;
    const scoresRef = window.firebaseRef(db, 'scores/');
    const newScoreRef = window.firebasePush(scoresRef);
    window.firebaseSet(newScoreRef, {
        nickname: nickname,
        score: score,
        timestamp: window.firebaseServerTimestamp() // Use the serverTimestamp function
    });

    scoreEntry.style.display = 'none'; // Hide the score entry after saving
    gameOverMessage.style.display = 'none'; // Hide game over message after saving
}

function toggleLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    if (leaderboard.style.display === 'none') {
        leaderboard.style.display = 'block';
        getScores(); // Load and display scores
    } else {
        leaderboard.style.display = 'none';
    }
}

function getScores() {
    const db = window.db;
    const scoresRef = window.firebaseRef(db, 'scores/');
    window.firebaseOnValue(scoresRef, (snapshot) => {
        const scores = snapshot.val();
        const scoresList = document.getElementById('scoresList');
        scoresList.innerHTML = ''; // Clear existing scores
        for (let key in scores) {
            const score = scores[key];
            const div = document.createElement('div');
            div.textContent = `${score.nickname}: ${score.score}`;
            scoresList.appendChild(div);
        }
    });
}

function adjustCountdownValue() {
    countdownValue = 10 - Math.min(8, Math.floor(tapCount / 1000));
}

function updateCountdown() {
    countdownDisplay.textContent = `Reset in: ${countdownValue} seconds`;
    if (countdownValue <= 0) {
        resetGame();
        adjustCountdownValue();
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
    if (!challengeActive) {
        tapCount++;
        updateTapDisplay(); // Update tap count display including last score
        adjustCountdownValue();
        startCountdown();

        checkForChallenge();
    }

    // Coin tilt effect based on click position
    const rect = clickableImage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = 20 * ((clickX / centerX) - 1);
    const rotateX = -20 * ((clickY / centerY) - 1);

    clickableImage.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    setTimeout(() => {
        clickableImage.style.transform = ''; // Reset the transform after the effect
    }, 200);

    if (tapCount === 2) {
        showBonusImage();
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
    tapCount = 0;
    adjustCountdownValue();
    tapCountDisplay.textContent = `Taps: ${tapCount}`;
    countdownDisplay.textContent = '';
    gameOverMessage.style.display = 'none';
    startCountdown(); // Restart the countdown
});

bonusImage.addEventListener('click', () => {
    const bonus = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    tapCount += bonus;
    tapCountDisplay.textContent = `Taps: ${tapCount}`;
    bonusImage.style.display = 'none';
    adjustCountdownValue();
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
