import { dice } from './utils.js'

describe("dice.js", () => {
  it("returns a number from 1-6", () => {
      const number = dice()
      expect(number).toBeGreaterThan(0)
      expect(number).toBeLessThan(7)
  })

  it("returns all 6, when run many times", () => {
    const usedNumbers = []
    /**
     * the chance of rolling a dice 10,000 times and missing a number
     * is low enough that we can treat it as zero
     */

    for (let i = 0; i < 10000; i++) {
      const number = dice()
      // if number isn't in array, push it in there
      if (!usedNumbers.find(e => e === number)) {
        usedNumbers.push(number)
      }
    }

    expect(usedNumbers.length).toBe(6)
  })
})
