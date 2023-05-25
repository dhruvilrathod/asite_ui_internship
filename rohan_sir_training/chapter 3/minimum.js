const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function min (x, y) {
    return (x < y) ? x : y;
}

var value1, value2, answer;
rl.question("Enter value 1: ", (ans) => {
    value1 = ans;
    rl.question("Enter value 2: ", (ans) => {
        value2 = ans;
        answer = min(value1, value2);
        console.log(answer);
        process.exit(0);
    })
})