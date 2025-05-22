'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const theLast = movements.findLast(mov => mov < 0);
console.log(movements);
console.log(theLast);

// Challenge
const latestLargeMovementIndex = movements.findLastIndex(
  movement => Math.abs(movement) > 2000
);

console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
