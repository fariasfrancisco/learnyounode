'use strict';

let http = require('http');

let url = process.argv[2];

let count = 0,
  strings = "";

http.get(url, response => {
  response.setEncoding('utf8');

  response.on('error', err => {
    console.error(err);
  });

  response.on('data', data => {
    strings += data;
  });

  response.on('end', () => {
    count = strings.length;

    console.log(count);
    console.log(strings);
  });
});