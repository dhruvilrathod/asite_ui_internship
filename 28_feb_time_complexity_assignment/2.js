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
        console.log(`Finding duplicates from generated array...`);
        console.log(findDuplicates(arr));
        process.exit(0);
    }
});

function generateArray(size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 200));
    }
    return arr;
}

function findDuplicates(arr) {
    var frequencies = {};
    var items = [];
    for (var i = 0; i < arr.length; i++) {
        if (!frequencies[arr[i]])
            frequencies[arr[i]] = 1;
        else frequencies[arr[i]]++
    }
    for(var x in frequencies) {
        if(frequencies[x] == 2) items.push(parseInt(x)); 
    }
    if(items.length == 0) return 'No duplication found.'
    else return items;
}

// time complexity: O(n)
// space complexity : O(n + n/2)