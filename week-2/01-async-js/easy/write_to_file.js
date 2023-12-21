var fs = require('fs');

const data = "\n I have completed the easy section of the assignment \n";

// append to the file in a new line

fs.appendFile('4-write-to-file.md', data, (err) => {
    if (err) {
        throw err;
    }
    console.log('Done!');
    });

console.log("entering the expensive operation")
// expensive operation
    let count = 0;
for(let i = 0; i < 10000; i++) {
    count += 1;
}