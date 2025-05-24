'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

const sortedMov = movements.toSorted();
console.log(sortedMov);

const newMovements = movements.with(1, 2000);
console.log(newMovements);
