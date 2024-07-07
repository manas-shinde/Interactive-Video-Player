// Define variable
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const range = document.querySelectorAll(".player__slider");

// Build necessary Functions
function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updatePlayButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  console.log(`Skip the video to ${this.dataset.skip}`);
  video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up the event Listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("pause", updatePlayButton);
video.addEventListener("play", updatePlayButton);

skipButtons.forEach((button) => button.addEventListener("click", skip));
