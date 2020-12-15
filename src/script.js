const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// video player
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function shufflePlay() {
  const randomVidFrame = Math.random(video.currentTime / video.duration) * 1;
  video.currentTime += randomVidFrame;
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
// video player

// drum machine
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  if (e.keyCode === 32) {
    togglePlay();
  }

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  keyController(key);
}

// drum kit controls
function keyController(key) {
  const keyVal = key.dataset.key;
  console.log(keyVal);

  switch (keyVal) {
    case "65": // A
      shufflePlay();
      break;
    case "83": // S
      shufflePlay();
      break;
    case "68": // D
      shufflePlay();
      break;
    case "70": // F
      shufflePlay();
      break;
    case "71": // G
      shufflePlay();
      break;
    case "72": // H
      shufflePlay();
      break;
    case "74": // J
      shufflePlay();
      break;
    case "75": // K
      shufflePlay();
      break;
    case "76": // L
      shufflePlay();
      break;
    default:
      break;
  }
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
// drum machine
