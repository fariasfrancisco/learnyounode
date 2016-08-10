'use strict';

let argsArray = process.argv;
let argsArrayLength = argsArray.length;
let initialPosition = 2;
let out = 0;

for (let i = initialPosition; i < argsArrayLength; i++) {
  out += Number(argsArray[i]);
}

console.log(out);