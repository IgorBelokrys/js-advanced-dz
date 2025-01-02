'use strict';

function randomDice(diceNum) {
  const dice = [
    {
      name: 'D4',
      number: 4,
    },
    {
      name: 'D6',
      number: 6,
    },
    {
      name: 'D8',
      number: 8,
    },
    {
      name: 'D10',
      number: 10,
    },
    {
      name: 'D12',
      number: 12,
    },
    {
      name: 'D16',
      number: 16,
    },
    {
      name: 'D20',
      number: 20,
    },
  ];
  const diceElement = dice.find((item) => item.name === diceNum);

  if (!diceElement) {
    return null;
  }

  const maxNum = diceElement.number;

  return Math.floor(Math.random() * maxNum) + 1;
}

console.log(randomDice('D6'));
