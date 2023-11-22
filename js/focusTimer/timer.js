import state from "./state.js";
import * as el from "./elements.js";
import * as actions from "./actions.js";
import { kitchenSound as kitchenSound } from "./sounds.js";

export function countdown() {

  clearTimeout(state.coutntdownId)

  if (!state.isRunning) {
    return;
  }

  let seconds = Number(el.seconds.textContent);
  let minutes = Number(el.minutes.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    actions.reset();
    return;
  }

  if (minutes === 0 && seconds === 0){
    kitchenSound.play();
  }

  updateDisplay(minutes, seconds);

  state.coutntdownId = setTimeout(() => countdown(), 1000);
}

plus.addEventListener("click", actions.increaseFiveMinutes);
minus.addEventListener("click",actions.decreaseFiveMinutes);

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}


