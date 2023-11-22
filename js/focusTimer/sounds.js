export const forestSound = new Audio('./assets/Floresta.wav')
export const rainSound = new Audio('./assets/Chuva.wav')
export const bonfireSound = new Audio('./assets/Lareira.wav')
export const coffeeShopSound = new Audio('./assets/Cafeteria.wav')
export const buttonPressSound = new Audio ('./assets/button-press.wav')
export const kitchenSound = new Audio ('./assets/kichen-timer.mp3')


const cardSounds = [forestSound, rainSound, bonfireSound, coffeeShopSound]

cardSounds.forEach (sound => {
    sound.loop = true
})
