export const dice = () => Math.floor(Math.random() * 6) + 1

export const updateImage = (diceImage) => {
  const number = dice()
  diceImage.src = `./images/${number}.png`
}
