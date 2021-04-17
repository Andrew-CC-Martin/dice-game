export const dice = () => Math.floor(Math.random() * 6) + 1

export const updateImage = (diceImage) => {
  const number = dice()
  diceImage.classList.add('transparent')
  setTimeout(() => {
    diceImage.src = `./images/${number}.png`
    diceImage.classList.remove('transparent')
  }, 200);
}
