'use strict';

let fs = require('fs');

let dir = process.argv[2],
  ext = process.argv[3];

fs.readdir(dir, (err, list) => {
  if (err) {
    throw err;
  }

  list.forEach(current => {
    if (current.match('\.' + ext + '$')) {
      console.log(current);
    }
  })
});
