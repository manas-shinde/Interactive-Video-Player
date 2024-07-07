// Define variable
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

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
function handleRangeChange() {
  video[this.name] = this.value;
}

function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// Hook up the event Listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("pause", updatePlayButton);
video.addEventListener("play", updatePlayButton);

//handle progress bar
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeChange));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeChange)
);

progress.addEventListener("click", scrub);
