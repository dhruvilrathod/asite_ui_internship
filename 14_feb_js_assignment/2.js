// This is calling queue
const callQueue = [
    {
        user: 'Uesr 1',
        duration: 2000
    },
    {
        user: 'User 2',
        duration: 4000
    },
    {
        user: 'User 3',
        duration: 1000
    },
    {
        user: 'User 4',
        duration: 300
    },
    {
        user: 'User 5',
        duration: 2580
    },
    {
        user: 'User 6',
        duration: 2000
    }
]

// The first promise to initiate the calling chain
const calling = new Promise((resolve, reject) => {
    resolve('Calling...');
    // Function to start the first call
    callStart(callEnd, callStart);
});

// Function to end the call and generate another call
function callEnd(callBack) {
    console.log(`${callQueue[0].user}'s call ended. [Duration: ${callQueue[0].duration / 1000} seconds]`);
    callQueue.splice(0, 1);
    callBack(callEnd, callStart);
}

// Function that will start the call
function callStart(callBack1, callBack2) {
    if (callQueue.length > 0) {
        process.stdout.write(`${callQueue[0].user} is calling...`);
        let myCall = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, callQueue[0].duration);
        });
        myCall.then(() => {
            callBack1(callBack2);
        });
    }
    else {
        process.exit(0);
    }
}