document.getElementById('playButton').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});
