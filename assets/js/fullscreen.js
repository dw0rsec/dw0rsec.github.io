const images = document.querySelectorAll('.project-pic');

function toggleFullscreen(event) {
    const imageElement = event.target;

    if (imageElement.requestFullscreen) {
        imageElement.requestFullscreen();
    } else if (imageElement.webkitRequestFullscreen) { // Safari
        imageElement.webkitRequestFullscreen();
    } else if (imageElement.mozRequestFullScreen) { // Firefox
        imageElement.mozRequestFullScreen();
    } else if (imageElement.msRequestFullscreen) { // IE/Edge
        imageElement.msRequestFullscreen();
    }
}

images.forEach(image => {
    image.addEventListener('click', toggleFullscreen);
});