'use strict';

let http = require('http'),
  map = require('through2-map');

let port = process.argv[2];

let server = http.createServer((req, res) => {
  if (req.method != 'POST')
    return res.end('Server only takes POST requests!');

  req.pipe(map(text => {
    return text.toString().toUpperCase()
  })).pipe(res);
});

server.listen(port);