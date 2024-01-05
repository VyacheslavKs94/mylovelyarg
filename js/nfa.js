document.addEventListener("DOMContentLoaded", function() {
    adjustBackground();
    window.addEventListener('resize', adjustBackground);
});

function adjustBackground() {
    var imageSize = { w: 1920, h: 1080 }; // Adjust to your image size
    var subjectRegion = { x: 0, y: 0, w: 1920, h: 1080 }; // Adjust to focus area

    var viewportSize = {
        w: window.innerWidth,
        h: window.innerHeight
    };

    var scale = Math.max(
        viewportSize.w / imageSize.w,
        viewportSize.h / imageSize.h
    );

    var pos = {
        x: (viewportSize.w - imageSize.w * scale) / 2,
        y: (viewportSize.h - imageSize.h * scale) / 2
    };

    var bgImage = document.getElementById('background-image');
    bgImage.style.width = (imageSize.w * scale) + 'px';
    bgImage.style.height = (imageSize.h * scale) + 'px';
    bgImage.style.left = pos.x + 'px';
    bgImage.style.top = pos.y + 'px';
}
