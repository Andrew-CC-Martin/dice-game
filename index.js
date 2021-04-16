import { updateImage } from "./src/utils.js"

const diceImage = document.getElementById("dice-image")
const button = document.getElementById("roll-dice")

button.addEventListener("click", () => updateImage(diceImage))
