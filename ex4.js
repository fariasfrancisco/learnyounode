'use strict';

let fs = require('fs');

let filePath = process.argv[2];

let newLinesCount,
  fileString;

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }

  fileString = data.toString();
  newLinesCount = fileString.split('\n').length - 1;

  console.log(newLinesCount);
});
