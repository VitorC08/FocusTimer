import { buttonPressSound } from "./focusTimer/sounds.js"


const buttonToggleTheme = document.getElementById('toggle-mode')

buttonToggleTheme.addEventListener('click', (event)=>{
    document.documentElement.classList.toggle('dark')
    buttonPressSound.play()
    event.currentTarget
})