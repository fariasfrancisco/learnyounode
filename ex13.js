'use strict';

let http = require('http'),
  url = require('url');

let port = process.argv[2];

let server = http.createServer((req, res) => {
  let requestUrlData = url.parse(req.url, true);

  if (req.method != 'GET')
    return res.end('This server only takes GET requests! \n');

  let out;

  switch (requestUrlData.pathname) {
    case '/api/parsetime':
    {
      let date = new Date(requestUrlData.query.iso);
      out = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };

      break;
    }

    case '/api/unixtime':
    {
      out = {unixtime: (new Date(requestUrlData.query.iso)).getTime()};
      break;
    }
  }

  if (out) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(out));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
