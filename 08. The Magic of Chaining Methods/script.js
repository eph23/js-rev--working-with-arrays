'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const euroToUsd = 1.1;

const totalDeposits = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov, i, arr) {
    console.log(arr);
    return mov * euroToUsd;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

console.log(totalDeposits);
