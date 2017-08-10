const fs = require('fs');
const express = require('express');
const app = express();

const subrangesSum = (n, k, averages) => {
  let avgs = averages.slice();
  let output = [];
  let count = 0;

  const subranges = range => {
    count = 0;

    while(range.length >= 2) {
      let i = 2;
      let index0 = range[0];
      let index1 = range[1];
      let indexI = range[i];

      if (index0 < index1) {
        count++;
        while(index0 < indexI && index1 !== indexI && i < k) {
          count++;
          i++;
        }
        range.shift();
      } else if (index0 > index1) {
        count--;
        while(index0 > indexI && index1 !== indexI && i < k) {
          count--;
          i++
        }
        range.shift();
      } else {
        range.shift();
      }
    }
    avgs.shift();
    output.push(count);

    if (avgs.length >= k) {
      subranges(avgs.slice(0, k));
    }
  };

  subranges(avgs.slice(0, k));
  output.forEach(num => console.log(num));
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
