const readline = require("readline");
const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// Main function call with two callback functions
getName(getLocation, getOperation);

// Function will get the name
function getName(callBack1, callBack2) {
    rl.question("What is your name? ", (ans) => {
        console.log(`My name is ${ans}`);
        callBack1(callBack2);
    });
}

// Function will get the location information
function getLocation(callBack1) {
    rl.question("What is your location? ", (ans) => {
        console.log(`My location is ${ans}`);
        callBack1();
    });
}

// Function will get the data which is wanted
function getOperation() {
    rl.question("What do you want to know? \n1. Temperature \n2. Humidity \n", (ans) => {
        if (parseInt(ans) == 1) {
            const temperature = new Promise((resolve, reject) => {
                console.log(`Getting Data...`);
                setTimeout(() => {
                    resolve(true);
                    console.log('Great ! The current temperature is 30 °C');
                    process.exit(0);
                }, 2000);
            })
        }
        else if (parseInt(ans) == 2) {
            const temperature = new Promise((resolve, reject) => {
                console.log(`Getting Data...`);
                setTimeout(() => {
                    resolve(true);
                    console.log('Great ! The current humidity is 14%');
                    process.exit(0);
                }, 2000);
            })
        }
        else {
            console.log("Invalid Input");
            process.exit(0);
        }
    })
}