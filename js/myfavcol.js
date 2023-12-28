function getRandomPhrase() {
    const encodedPhrases = ["Q29kZVBhcnQx", "Q29kZVBhcnQy", "V29yZDE=", "V29yZDI="];
    const randomIndex = Math.floor(Math.random() * encodedPhrases.length);
    return atob(encodedPhrases[randomIndex]); 
}

function positionElementRandomly(element) {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.top = y + 'px';
}

function checkBackgroundColor() {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    const dynamicTextElement = document.getElementById("dynamic-text");
    const signatureImage = document.getElementById("signature-image");

    // Handle text
    if (bgColor === 'rgb(89, 3, 126)') {
        dynamicTextElement.textContent = getRandomPhrase();
        positionElementRandomly(dynamicTextElement);
    } else {
        dynamicTextElement.textContent = "";
    }

    // Handle image display
    if (bgColor === 'rgb(8, 7, 7)') {
        signatureImage.style.display = 'block';
    } else {
        signatureImage.style.display = 'none';
    }
}

setInterval(checkBackgroundColor, 500);
