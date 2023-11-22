import state from "./state.js";
import * as events from './events.js'
import * as timer from './timer.js'
import * as cardElements from './card-events.js'
import * as el from "./elements.js"

export function start (minutes,seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    events.registerControls()
}