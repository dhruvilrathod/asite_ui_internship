const obj = {
    "isbn": "123-456-222",
    "author": {
        "lastname": "Doe",
        "firstname": "Jane",
        "city": {
            "name": "Ahmedabad"
        }
    },
    "editor": {
        "lastname": "Smith",
        "firstname": "Jane"
    },
    "title": "The Ultimate Database Study Guide",
    "category": [
        "Non-Fiction",
        "Technology"
    ]
}

var flatten = {};


// time complexity: n log n
function flattenObject(obj, parent) {
    for (var x in obj) {
        if (typeof obj[x] === 'object')
            if (parent == undefined) {
                flattenObject(obj[x], x);
            }
            else {
                var propertyName = parent.toString() + '.' + x.toString();
                flattenObject(obj[x], propertyName);
            }
        else {
            if (parent == undefined) {
                flatten[x] = obj[x];
            }
            else {
                var propertyName = parent.toString() + '.' + x.toString();
                flatten[propertyName] = obj[x];
            }
        }
    }
    return;
}

console.log(`Original Object:`);
console.log(obj);
flattenObject(obj);
console.log('Flattened Object:');
console.log(flatten);