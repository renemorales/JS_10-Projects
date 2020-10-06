const text = 'Life is pretty easy to recognise. It moves, it grows, it eats, it excretes, it reproduces';

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;

  }
}

setInterval(writeText, 100);