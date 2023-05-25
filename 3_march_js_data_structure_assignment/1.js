const myStrings = [
    'Dark', 'chocolate',
    'Baked', 'tortilla',
    'chips', 'Salsa',
    'Almonds', 'or',
    'walnuts', 'abc',
    'Whole-grain', 'baked',
    'crackers', '100-calorie',
    'snack', 'packs',
    'Graham', 'crackers',
    'High-fiber', 'cereal',
    'bars', 'Reduced-fat',
    'microwaveable', 'popcorn'
];

var charCounts = {};

// time compplexity of this: O(n)
function sortByLength(string) {
    // this will store all the strings in param's array to an object in {'string' : count} format
    for (var i = 0; i < string.length; i++) {
        charCounts[string[i]] = string[i].length;
    }
    var sorted = quickSort(charCounts);
    return Object.keys(sorted);
}

// this function will perform quick sort on passed object rather than array
// time complexity of this: O(n log n)
function quickSort(obj) {
    var keys = Object.keys(obj);
    if (keys.length < 2) return obj;
    var pivot_name = keys[keys.length - 1]; 
    var pivot = obj[keys[keys.length - 1]];
    var left = {};
    var right = {};
    for (var i = 0; i < keys.length - 1; i++) {
        if(obj[keys[i]] < pivot) {
            left[keys[i]] = obj[keys[i]];
        }
        else {
            right[keys[i]] = obj[keys[i]];
        }
    }
    return {...quickSort(left), ...{[pivot_name] :  pivot}, ...quickSort(right)};
}

console.log(`Original strings: `);
console.log(myStrings);
console.log(`Sorted strings: `);
var sorted = sortByLength(myStrings);
console.log(sorted);