const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question('Enter size of array: ', (size) => {
    if (!parseInt(size)) {
        console.log('Invalid input');
        process.exit(0);
    }
    else {
        console.log(`Generating array of length ${size}...`);
        var arr = generateArray(size);
        console.log(arr);
        rl.question('Enter a number to check: ', (num) => {
            if (!parseInt(num)) {
                console.log('Invalid input');
                process.exit(0);
            }
            else {
                console.log(`Finding array items that add up to number ${num}...`);
                var items = findItems(arr, num);
                console.log(items);
            }
        })
    }
});

function generateArray(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 200));
    }
    return arr;
}

function findItems(arr, num) {
    num = parseInt(num);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= num) {
            for (var j = i; j < arr.length; j++) {
                if (arr[i] + arr[j] == num) return [arr[i], arr[j]];
            }
        }
    }
    return 'No pair found'
}

// Time Complexity
// Worst Case: O(n(n+1)/2)
// = O((n^2)/2) = O(n^2) 
