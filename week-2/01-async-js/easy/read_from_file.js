var fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// console.log("entering the expensive operation")
// expensive operation
    let count = 0;
for(let i = 0; i < 100; i++) {
    count += 1;
}
console.log(count)