const btnVideo = document.querySelector(".info-video");
const btnExit = document.querySelector(".info__video-exit");
const video = document.querySelector(".info__video");
export function info() {

    btnVideo.addEventListener("click", getVideo);
    btnExit.addEventListener("click", exitVideo);
}

function getVideo() {

    video.classList.add("active");
    btnExit.classList.add("active");

}

function exitVideo() {
    video.classList.remove("active");
    btnExit.classList.remove("active");
}