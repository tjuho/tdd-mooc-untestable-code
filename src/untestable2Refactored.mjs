function diceRoll() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
/* Uses function that returns a random value so it can't be tested against static value */
export function diceHandValue() {
  return diceHandValueHelper(diceRoll(),diceRoll());
}

export function diceHandValueHelper(die1, die2) {
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
