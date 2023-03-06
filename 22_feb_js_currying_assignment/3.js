const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const products = [
    {
        id: 1,
        name: 'product 1'
    },
    {
        id: 2,
        name: 'product 2'
    },
    {
        id: 3,
        name: 'product 3'
    },
    {
        id: 4,
        name: 'product 4'
    },
    {
        id: 5,
        name: 'product 5'
    },
    {
        id: 6,
        name: 'product 6'
    },
    {
        id: 7,
        name: 'product 7'
    },
    {
        id: 8,
        name: 'product 8'
    },
    {
        id: 9,
        name: 'product 9'
    },
    {
        id: 10,
        name: 'product 10'
    }
];

console.log("List of all products: ");
console.table(products);

function filter (id) {
    return function (name) {
        console.log('Filtering by id:', id);
        var x = products.filter((item) => item.id !== id);
        console.table(x);
        console.log('Filtering by name:', name);
        var y = x.filter((item) => item.name !== name);
        console.table(y);
        process.exit(0);
    }
}

rl.question("Please enter id of product: ", (productID) => {
    if (!parseInt(productID)) {
        console.log('Invalid Input');
        process.exit(0);
    }
    else {
        rl.question("Please name of product: ", (productName) => {
            filter(productID)(productName);
        })
    }
});

