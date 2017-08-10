const fs = require('fs');
const express = require('express');
const app = express();

const subrangesSum = (n, k, averages) => {
  let avgs = averages.slice();

  const subranges = arr => {
    let total = 0;

    while(arr.length >= k) {
      for(var i = 0; i < arr.length; i++) {
        const index0 = arr[0];
        const indexI = arr[i];

        if (index0 < indexI) {
          total++;
        } else if (index0 > indexI) {
          total--;
        }
        arr.shift();
      }
    }
    console.log(total);
    avgs.shift();
    if (avgs.length >= k) {
      subranges(avgs.slice(0, k));
    }
  }

  subranges(avgs.slice(0, k));
};

fs.readFile(__dirname + '/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('fs.readfile() error =>', err);
  } else {
    let content = data.replace("\n", ' ').split(' ').map(item => +item);
    const n = content.shift();
    const k = content.shift();

    subrangesSum(n, k, content);
  }
});


app.listen('8888', function () {
  console.log('Listening on port 8888');
});
