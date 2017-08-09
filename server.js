const fs = require('fs');
const express = require('express');
const app = express();

const sumSubranges = (n, k, averages) => {
  console.log(n);
  console.log(k);
  console.log(averages);
};

fs.readFile(__dirname + '/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('fs.readfile() error =>', err);
  } else {
    let content = data.replace("\n", ' ').split(' ').map(item => +item);
    const n = content.shift();
    const k = content.shift();

    sumSubranges(n, k, content);
  }
});


app.listen('8888', function () {
  console.log('Listening on port 8888');
});
