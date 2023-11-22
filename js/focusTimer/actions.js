import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";
import { buttonPressSound } from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countdown();
  buttonPressSound.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  buttonPressSound.play();
}

export function increaseFiveMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes += 5;

  const maxMinutesLimit = 60 // minutes

  if (minutes > maxMinutesLimit) {
    minutes = maxMinutesLimit;
    seconds = 0
  }
  timer.updateDisplay(minutes, seconds);
  buttonPressSound.play();
}

export function decreaseFiveMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes -= 5;

  const minMinutesLimit = 0 //minutes

  if (minutes < 5) {
    minutes = minMinutesLimit;
  }
  timer.updateDisplay(minutes, seconds);
  buttonPressSound.play();
}

