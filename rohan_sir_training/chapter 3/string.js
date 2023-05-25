const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function countBs(x) {
    var count = 0;
    for(var y in x) {
        if(x[y] == 'B') count++;
    }
    return count;
}

var answer;
rl.question("Enter String: ", (ans) => {
        ans = ans.toString();
        answer = countBs(ans)
        console.log(answer);
        process.exit(0);
})