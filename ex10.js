'use strict';

let net = require('net');

let port = Number(process.argv[2]);

let server = net.createServer(function (socket) {
  let fillZeroes = (i) => {
    return (i < 10 ? '0' : '') + i;
  };

  let date = new Date();

  let YY = fillZeroes(date.getFullYear());
  let MM = fillZeroes(date.getMonth() + 1);
  let DD = fillZeroes(date.getDate());
  let hh = fillZeroes(date.getHours());
  let mm = fillZeroes(date.getMinutes());

  let data = YY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + '\n';

  socket.end(data);
});

server.listen(port);
