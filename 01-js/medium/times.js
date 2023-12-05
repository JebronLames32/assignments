/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// output obtained:
// 0.000
// 0.002
// 0.878

function sum(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

function calculateTime(n) {
    let start = new Date();
    sum(n);
    let end = new Date();
    let time = end - start;
    return time/1000;   // in seconds
}

// set precision to 3 decimal places
console.log(calculateTime(100).toFixed(3));
console.log(calculateTime(100000).toFixed(3));
console.log(calculateTime(1000000000).toFixed(3));