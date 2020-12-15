// video player functions
const { togglePlay, shufflePlay } = require("./videoPlayer");

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
