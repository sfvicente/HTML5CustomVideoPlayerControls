

function play(videoElementId) {
    var videoElement = document.getElementById(videoElementId);

    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}