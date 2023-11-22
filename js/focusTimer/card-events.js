import * as sounds from "./sounds.js";
import * as el from "./elements.js";

function toggleCardEvent(cardElement, sound) {
  cardElement.addEventListener("click", () => {
    cardElement.classList.toggle("active");
    sounds.buttonPressSound.play();

    cardElement.classList.contains("active") ? sound.play() : sound.pause();
  });
}

toggleCardEvent(el.cardForest, sounds.forestSound);
toggleCardEvent(el.cardRain, sounds.rainSound);
toggleCardEvent(el.cardCoffeeshop, sounds.coffeeShopSound);
toggleCardEvent(el.cardBonfire, sounds.bonfireSound);
