document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        'The first rules the <strong><span style="color: red;">dawn</span></strong> with a fiery might,',
        'In a digital world, I am <strong>three</strong> kings,',
        'The second commands the <strong><span style="color: green;">forest</span></strong> in light,',
        'Together, they bring the spectrum to sight.',
        'The third in the <strong><span style="color: blue;">ocean</span></strong> depth takes flight.',
        'Masters of display, in color they sing.'
    ];

    const mosaicBackground = document.querySelector('.mosaic-background');
    if (mosaicBackground) {
        for (let i = 0; i < phrases.length; i++) {
            const textItem = document.createElement('div');
            textItem.classList.add('text-item');
            textItem.innerHTML = phrases[i];
            textItem.style.left = `${Math.random() * 75}vw`;
            textItem.style.top = `${Math.random() * 85}vh`;
            mosaicBackground.appendChild(textItem);
        }
    }
});
