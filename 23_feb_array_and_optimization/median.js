const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.question("Enter size of array: ", (ans) => {
    if (!parseInt(ans)) {
        console.log('Invalid Input');
        process.exit(0);
    }
    else {
        console.log(`Generating sorted array 1...`);
        var arr1 = generateArray(parseInt(ans));
        console.log(arr1);
        console.log(`Generating sorted array 2...`);
        var arr2 = generateArray(parseInt(ans));
        console.log(arr2);
        console.log(`Median of this two sorted array: ${findMedian(arr1, arr2)}`);
    }
});

function generateArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 200));
    }
    arr.sort((a, b) => a - b);
    return arr;
}

function findMedian(arr1, arr2) {
    arr1 = arr1.concat(arr2);
    arr1 = arr1.sort((a,b) => a-b);
    var median = (arr1[(arr1.length / 2) - 1] + arr1[(((arr1.length) / 2))]) / 2;
    return median;
}