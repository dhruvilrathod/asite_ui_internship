const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log("Find the volume of n-gonal prism");

rl.question("Please enter number of sides of prism (n): ", (numberOfSide) => {
    if (!parseInt(numberOfSide)) {
        console.log('Invalid Input');
        process.exit(0);
    }
    else {
        rl.question("Please enter length of side of prism (l): ", (lengthOfSide) => {
            if (!parseInt(lengthOfSide)) {
                console.log('Invalid Input');
                process.exit(0);
            }
            else {
                rl.question("Please enter height of prism (h): ", (heightOfPrism) => {
                    if (!parseInt(heightOfPrism)) {
                        console.log('Invalid Input');
                        process.exit(0);
                    }
                    else {
                        var volume = findVolume(numberOfSide)(lengthOfSide)(heightOfPrism);
                        console.log(`Volume of prism is ${volume}`);
                        process.exit(0);
                    }
                });
            }
        });
    }
})

function findVolume(numberOfSide) {
    return function (lengthOfSide) {
        return function (heightOfPrism) {
            var n = parseInt(numberOfSide);
            var s = parseInt(lengthOfSide);
            var h = parseInt(heightOfPrism);
            return ((n / 4) * (h * s * s * (Math.cos(Math.PI / n) / Math.sin(Math.PI / n)))).toFixed(2);
        }
    }
}