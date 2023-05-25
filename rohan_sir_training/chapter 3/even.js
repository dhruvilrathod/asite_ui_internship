const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function isEven (x) {
    if(x%2 == 0) return true;
    else if(x%2 == 1 || x%2 == -1) return false;
    else isEven((x%2) - 2);
}

var answer;
rl.question("Enter number: ", (ans) => {
    if(!isNaN(parseInt(ans))) {
        answer = isEven(ans);
        answer == true ? console.log(`${ans} is even`) : console.log(`${ans} is odd`);
        process.exit(0);
    }
    else {
        console.log('Invalid Input');
        process.exit(0);
    }
})

// Reason for code not working with -1 or any tother negative odd numbers is because in every recursive call, it will execute the function for -1 and return -1 and call it again
// To solve it, we can put a condition for -1 as well

// console.log((-1-2) % 2);