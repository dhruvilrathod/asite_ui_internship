const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var arr = [];

for (var i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 200));
}

console.log(arr);

rl.question("Please Enter Number: ", (num) => {
    if (!parseInt(num)) {
        console.log('Invalid Input');
        process.exit(0);
    }
    else {
        rl.question("Please Enter divider: ", (div) => {
            if (!parseInt(div)) {
                console.log('Invalid Input');
                process.exit(0);
            }
            else {
                rl.question("Please enter number to add: ", (add) => {
                    if (!parseInt(add)) {
                        console.log('Invalid Input');
                        process.exit(0);
                    }
                    else {
                        console.log(operations(arr)(num)(div)(add));
                    }
                });
            }
        })
    }
});

function operations(array) {
    return function (value) {
        console.log(`Mapping ${value}... `);
        var matchIndex;
        for (var i = 0; i < array.length; i++) {
            if (array[i] == parseInt(value)) {
                matchIndex = i;
            }
        }
        if (matchIndex == undefined) return 'No match found';
        else {
            console.log(`${value} mapped at index ${matchIndex}`);
            console.log(`Filtering ${value}... `);
            arr_new = array.filter((d) => d == value);
            console.log(`${value} filterd: ${arr_new}`);
            return function (divide) {
                console.log(`Dividing ${value} with ${divide}: `);
                var result = value / parseInt(divide);
                console.log(`${result}`);
                return function (add) {
                    console.log(`Adding ${result} with ${add}: `);
                    result = result + parseInt(add);
                    console.log(`${result}`);
                    return result;
                }
            }
        }
    }
}