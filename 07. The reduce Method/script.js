'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, curr) {
  return acc + curr;
}, 100);
console.log(balance);

const greaterVal = movements.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);

console.log(greaterVal);
