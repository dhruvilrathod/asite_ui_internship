const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// function to generate k-sorted array
function generateKSortedArray(k, length) {
    var arr = [];
    var tempIndices = [];
    var ksortedArray = [];

    // generate random array of given length
    for (var i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 200));
    }

    // sort it
    arr.sort((a, b) => a - b);

    // generate random indices for k-sorting
    for (var x = 0; x < arr.length; x++) {
        var tempIndex = Math.floor(Math.random() * k);
        // subtotal is not of elements, it is of index
        var subTotal = tempIndices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if (subTotal < arr.length)
            if (tempIndex + subTotal < arr.length - 1)
                tempIndices.push(tempIndex);
            else break;
        else break;
    }

    // this is to complete the last part of array
    if (tempIndices.reduce((accumulator, currentValue) => accumulator + currentValue, 0) < arr.length)
        tempIndices.push(arr.length - tempIndices.reduce((accumulator, currentValue) => accumulator + currentValue, 0))

    // make partition of array according to tempIndices
    // shuffle every element in each partition
    // concate new transformed partition to form final ksorted array
    var initialPointer = 0;
    for (var x in tempIndices) {
        var temp = arr.slice(initialPointer, initialPointer + tempIndices[x])
        for (var j = 0; j < temp.length; j++) {
            var randomIndex = Math.floor(Math.random() * j);
            [temp[j], temp[randomIndex]] = [temp[randomIndex], temp[j]];
        }
        ksortedArray = ksortedArray.concat(temp);
        initialPointer = initialPointer + tempIndices[x];
    }

    return ksortedArray;
}

// function to find common elements in all arrays
function findCommonElements(arr) {
    var common = [];
    var all = [];

    // find all the possible elements from all array and store them in one single array
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (!all.includes(arr[i][j]))
                all.push(arr[i][j]);
        }
    }

    // sort that all array
    all.sort((a, b) => a - b);

    // for each element in 'all' array
    for (var k = 0; k < all.length; k++) {
        // occurence in actual k-sorted arrays
        var count = 0;
        // for all the ksorted arrays and their elements
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                // if it has the element then count++ and break the loop
                if (arr[i][j] == all[k]) {
                    count++;
                    break;
                }
            }
        }
        // if occurence count matches the number of ksorted arrays then that element would be common in all the arrays
        if (count == arr.length) common.push(all[k]);
    }

    console.log('Common elements in all arrays:');
    console.log(common);
}

rl.question("Enter k: ", (k) => {
    if (!parseInt(k)) {
        console.log('Invalid Input');
        process.exit(0);
    }
    else {
        rl.question("Enter size of array: ", (size) => {
            if (!parseInt(size)) {
                console.log('Invalid Input');
                process.exit(0);
            }
            else {
                rl.question("Enter total number of arrays: ", (num) => {
                    if (!parseInt(num)) {
                        console.log('Invalid Input');
                        process.exit(0);
                    }
                    else {
                        var allArrays = [];
                        for (var i = 0; i < num; i++) {
                            allArrays.push(generateKSortedArray(k, size));
                        }
                        console.log(`${num} newly generated ${k}-sorted arrays:`);
                        console.log(allArrays);
                        findCommonElements(allArrays);
                    }
                })
            }
        })
    }
});
