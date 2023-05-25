const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function countBs(x) {
    var count = countChar(x, 'B');
    return count;
}

function countChar(x, char) {
    var count = 0;
    for(var y in x) {
        if(x[y] == char) count++;
    }
    return count;
}

var answer;
rl.question("Enter String and Character(Optional): ", (ans) => {
        ans = ans.toString();
        // answer = countBs(ans)
        var string = ans.split(' ')[0];
        var char = (ans.split(' ')[1] != undefined) ? ans.split(' ')[1] : '';
        if(string.includes(' ') || char.length > 1) {
            console.log('Invalid input');
            process.exit(0);
        }
        else if(char.length == 0) {
            answer = countBs(string);
            console.log(answer);
        }
        else {
            answer = countChar(string, char);
            console.log(answer);
        }
        process.exit(0);
})