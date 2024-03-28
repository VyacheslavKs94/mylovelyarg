const words = ["WHAT", "IF", "YOU", "COULD", "MAKE", "YOUR", "OWN", "RULES"];
const wordDisplay = document.getElementById("wordDisplay");
const finalImage = document.getElementById("finalImage");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const container = document.querySelector(".container");
let index = 0;
let speed = 2000; // Starting speed

function displayWord() {
    if (speed < 2) {
        wordDisplay.style.display = 'none';
        container.style.display = 'flex'; 
        finalImage.style.display = 'block';

        setTimeout(() => {
            topText.style.display = 'block'; 
            setTimeout(() => {
                bottomText.style.display = 'block'; 
            }, 1750);
        }, 1000);

        return; 
    }

    wordDisplay.innerText = words[index++];
    if (index >= words.length) index = 0;
    setTimeout(displayWord, speed);
    speed *= 0.90;
}

displayWord();
