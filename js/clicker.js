let tapCount = 0;
let countdownValue = 10; // Starting countdown value
let countdownInterval;

const tapCountDisplay = document.getElementById('tapCount');
const countdownDisplay = document.getElementById('countdown');
const clickableImage = document.getElementById('clickableImage');
const bonusImage = document.getElementById('bonusImage');
const gameOverMessage = document.getElementById('gameOverMessage');
const gameOverText = document.getElementById('gameOverText');
const restartButton = document.getElementById('restartButton');

function resetGame() {
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

    // Save the score when the game is over
    writeScore('user1', tapCount);  // 'user1' should be replaced with a unique identifier for the user

    tapCount = 0;
    tapCountDisplay.textContent = `Taps: ${tapCount}`;
    adjustCountdownValue();
    clearInterval(countdownInterval);
    countdownInterval = null;

    getScores();  // To display the leaderboard
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
    tapCount++;
    tapCountDisplay.textContent = `Taps: ${tapCount}`;
    adjustCountdownValue();
    startCountdown();

    const rect = clickableImage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Determine how much to rotate based on click position
    const rotateY = 20 * ((clickX / centerX) - 1);
    const rotateX = -20 * ((clickY / centerY) - 1);

    clickableImage.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    setTimeout(() => {
        clickableImage.style.transform = ''; // Reset the transform after the effect
    }, 200);

    // Show the bonus image logic remains the same
    if (tapCount === 2) {
        showBonusImage();
    }
});

function showBonusImage() {
    const angle = Math.random() * Math.PI * 2;
    const radius = 50; // Adjust the radius for the desired appearance area
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