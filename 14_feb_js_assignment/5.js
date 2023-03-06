function createPromise(value, time) {
    return new Promise((resolve, reject) => {
        var x = (new Date().toTimeString().split(' ')[0]);
        setTimeout(() => {
            // this will show the time taken by the promise
            console.log(`[${x} - ${new Date().toTimeString().split(' ')[0]}] \t ${value}`);
        }, time);
    })
}

// Execute all promises parallely, all will have the same starting time
console.log(`[Start time - End time] \t [Message]`);
Promise.all([
    createPromise("Hey College! The class has been cancelled", 2000),
    createPromise("Hey College! The next week's class is scheduled", 1000),
    createPromise("Go to hospital for sickness check-up", 3000)
])
