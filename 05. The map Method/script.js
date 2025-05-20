'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return Math.ceil(mov * euroToUsd);
// });
const movementsUSD = movements.map(mov => Math.ceil(mov * euroToUsd));

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {
  let moves = mov > 0 ? 'deposited' : 'withdrew';

  // if (mov > 0) {
  //   console.log(`Movements ${i + 1}: You ${moves} ${mov}`);
  // } else {
  //   console.log(`Movements ${i + 1}: You ${moves} ${Math.abs(mov)}`);
  // }

  mov > 0
    ? console.log(`Movements ${i + 1}: You ${moves} ${mov}`)
    : console.log(`Movements ${i + 1}: You ${moves} ${Math.abs(mov)}`);
});
