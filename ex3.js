'use strict';

let fs = require('fs');

let filePath = process.argv[2];

let fileBuffer,
  fileString;

try {
  fileBuffer = fs.readFileSync(filePath);
  fileString = fileBuffer.toString();
} catch (e) {
  fileBuffer = [];
  fileString = "";
}

let newLinesCount = fileString.split('\n').length - 1;

console.log(newLinesCount);