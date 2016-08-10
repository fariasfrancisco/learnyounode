'use strict';

let http = require('http'),
  fs = require('fs');

let port = process.argv[2],
  path = process.argv[3];

let server = http.createServer((req, res) => {
  let stream = fs.createReadStream(path);

  res.writeHead(200, {'content-type': 'text/plain'});
  stream.pipe(res);
});

server.listen(port);
  