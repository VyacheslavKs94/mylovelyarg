document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        
        'The second commands the <span style="color: green;">forest</span> in light,',
        'In a digital world, I am three kings,',
        'The first rules the <span style="color: red;">dawn</span> with a fiery might,',
        'Together, they bring the spectrum to sight.',
        'Masters of display, in color they sing.',
        'The third in the <span style="color: lightblue;">ocean</span> depth takes flight.'
        
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
