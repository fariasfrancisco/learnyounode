'use strict';

let http = require('http');

let urls = (() => {
  let args = process.argv,
    arr = [];

  for (let i = 2; i < args.length; i++) {
    arr.push(args[i]);
  }

  return arr;
})();

let collect = count => {
  if (count < urls.length) {
    http.get(urls[count], res => {
      let strings = '';

      res.setEncoding('utf8');

      res.on('error', err => {
        console.error(err);
      });

      res.on('data', data => {
        strings += data;
      });

      res.on('end', () => {
        console.log(strings);

        count++;
        collect(count);
      })
    });
  }
};

collect(0);
