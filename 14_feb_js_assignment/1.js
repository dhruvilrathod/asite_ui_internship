const readline = require("readline");
const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var timeOut = 0;

// This function will reset timeOut
const resetTimeOut = () => {
    timeOut = 0;
}

// This function will increase the time in timeOut
const increaseTimeOut = () => {
    timeOut += 2000;
}

// Sentence 1
const sentence1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Angular Rockstars");
        console.log("Hello Angular Rockstars");
    }, timeOut);
    increaseTimeOut();
});

// Step 1
const step1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Welcome to Agular's Training Session");
        console.log("Welcome to Agular's Training Session");
    }, timeOut);
    increaseTimeOut();
});

// Step 2
const step2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Let us proceed");
        console.log("Let us proceed");
    }, timeOut);
    increaseTimeOut();
});

// Step 3
const step3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Are you ok?");
        takeInput();
    }, timeOut);
    increaseTimeOut();
});

const takeInput = () => {
    rl.question(`Are you okay? \n 1. We are fine \n 2. We have doubts \n Choice: `, (ans) => {
        if (parseInt(ans) == 1) {
            resetTimeOut();

            // Step 4a
            const step4a = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("We are fine");
                    console.log("We are fine");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 4b
            const step5b = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Here We Go");
                    console.log("Here We Go");
                    process.exit(0);
                }, timeOut);
            });
        }
        else if (parseInt(ans) == 2) {
            resetTimeOut();

            // Step 5
            const step5 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("We have Doubts");
                    console.log("We have Doubts");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 6
            const step6 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Let us discuss");
                    console.log("Let us discuss");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 7
            const step7 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("What is the problem");
                    console.log("What is the problem");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 8
            const step8 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("What is the current version of Angular?");
                    console.log("What is the current version of Angular?");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 9
            const step9 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Angular 14");
                    console.log("Angular 14");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 10
            const step10 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("We are having trouble in understanding Angular");
                    console.log("We are having trouble in understanding Angular");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 11
            const step11 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Let me explain");
                    console.log("Let me explain");
                }, timeOut);
                increaseTimeOut();
            });

            // Step 12
            const step12 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("End");
                    console.log("End");
                    process.exit(0);
                }, timeOut);
            });
        }
        else {
            console.log("Invalid Input");
            process.exit(0);
        }
    });
}