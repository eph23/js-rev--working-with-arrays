'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const anyDeposits = movements.some(movement => movement > 0);
console.log(anyDeposits);

const everyDeposit = movements.every(movement => movement > 0);
console.log(everyDeposit);

const deposit = movement => movement < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
