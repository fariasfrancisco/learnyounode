'use strict';

let http = require('http');
let bl = require('bl');

let url = process.argv[2];

let strings = '',
  count = 0;

http.get(url, response => {
  response.pipe(bl((err, data) => {
    if (err) return console.error(err);

    strings = data.toString();
    count = strings.length;

    console.log(count);
    console.log(strings);
  }))
});