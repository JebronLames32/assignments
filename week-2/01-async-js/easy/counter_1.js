// creating a counter in javascript

// code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter() {
  let count = 0;
  setInterval(() => {
    count++;
    console.log(count);
  }, 1000);
}

counter();