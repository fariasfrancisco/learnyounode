'use strict';

let ex6 = require('./ex6a');

let dir = process.argv[2],
  ext = process.argv[3];

ex6(dir, ext, (err, list) => {
  if (err) return console.error(err);

  list.forEach(current => {
    console.log(current);
  });
});