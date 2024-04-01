document.addEventListener('DOMContentLoaded', () => {
    const numberOfClicks = 10; // Number of surrounding "Click!" texts
    const clickElements = [];

    // Function to randomly position the "Click!" texts
    function randomizePositions() {
        clickElements.forEach(clickElement => {
            const { innerWidth: width, innerHeight: height } = window;
            const x = Math.random() * (width - clickElement.clientWidth);
            const y = Math.random() * (height - clickElement.clientHeight);

            clickElement.style.left = `${x}px`;
            clickElement.style.top = `${y}px`;
        });
    }

    // Create surrounding "Click!" texts
    for (let i = 0; i < numberOfClicks; i++) {
        const clickElement = document.createElement('div');
        clickElement.textContent = "Click!";
        clickElement.classList.add('random-click');
        document.body.appendChild(clickElement);
        clickElements.push(clickElement);
    }

    // Randomize positions immediately and then every 0.6 seconds
    randomizePositions();
    setInterval(randomizePositions, 600);
});
