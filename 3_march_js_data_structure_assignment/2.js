// two hash tables, one with probing and other one without probing
var hashTable1 = new Array(20);
var hashTable2 = new Array(20);

// this hash index generator does not use probing
function createHashNoProbing(key) {
    var hashIndex = 0;
    for (var i = 0; i < key.length; i++) {
        hashIndex += key.charCodeAt(i);
    }
    hashIndex = (hashIndex) % hashTable1.length;
    return hashIndex;
}

// this hash index generator uses probing
function createHashWithProbing(key) {
    var hashIndex = 0;
    for (var i = 0; i < key.length; i++) {
        hashIndex += key.charCodeAt(i);
    }
    hashIndex = (hashIndex) % hashTable2.length;
    // Quadratic probing with (hash(key) + i*i) % length approach 
    var count = 1;
    while (hashTable2[hashIndex] != (undefined || null)) {
        hashIndex = (hashIndex + count * count) % hashTable2.length;
    }
    return hashIndex;
}


function setValue1(key, value) {
    var hashIndex = createHashNoProbing(key);
    console.log(hashIndex);
    hashTable1[hashIndex] = value;
}

function setValue2(key, value) {
    var hashIndex = createHashWithProbing(key);
    console.log(hashIndex);
    hashTable2[hashIndex] = value;
}


const data = [
    {
        'abc': 'data1'
    },
    {
        'abc': 'data2'
    },
    {
        'xyz': 'data3'
    },
    {
        'pqr': 'data4'
    }
]

console.log(`Data:`);
console.log(data);

console.log(`Creating hash table without Quadratic Probing...`);
for (var x in data) {
    var key = Object.keys(data[x])[0];
    var data1 = data[x][key];
    setValue1(key, data1);
}

console.log(`Generated Hash Table`);
console.table(hashTable1);

console.log(`Creating hash table with Quadratic Probing...`);
for (var x in data) {
    var key = Object.keys(data[x])[0];
    var data1 = data[x][key];
    setValue2(key, data1);
}

console.log(`Generated Hash Table`);
console.table(hashTable2);