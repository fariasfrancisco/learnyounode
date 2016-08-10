'use strict';

let fs = require('fs');

module.exports = (dir, ext, cb) => {
  let out = [];

  fs.readdir(dir, (err, list) => {
    if (err) return cb(err);

    list.forEach(current => {
      if (current.match('\.' + ext + '$')) {
        out.push(current);
      }
    });

    cb(null, out);
  });
};
