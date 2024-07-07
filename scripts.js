const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const range = document.querySelectorAll(".player__slider");

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}
function updatePlayButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
toggle.addEventListener("click", togglePlay);
