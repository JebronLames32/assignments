// Counter without setInterval
// counter using setTimeout

function countDown(number) {
  console.log(number);
  if (number > 0) {
    setTimeout(() => {
      countDown(number - 1);
    }, 1000);
  }
}

countDown(5);