// Function to invoke callback chaining
function inform(callBack1, callBack2, callBack3) {
    console.log('Sending invite to respective people...');
    console.log(`To \t\t Event Type \t\t\t Date \t\t\t Venue \t\t Status`);
    callBack1(callBack2, callBack3);
}

// Function to send invite to XXX
function toXXX(callBack1, callBack2) {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`XXX \t\t Blood Donation Camp \t\t 20 Feb, 2023 \t\t Delhi \t\t Sent Successfully`);
        }, 2000);
    }).then(() => {
        callBack1(callBack2)
    });
}

// Function to send invite to YYY
function toYYY(callBack1) {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`YYY \t\t Helth Check Camp \t\t 23 Feb, 2023 \t\t Mumbai \t Sent Successfully`);
        }, 2000);
    }).then(() => {
        callBack1()
    });
}

// Function to send invite to ZZZ
function toZZZ() {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`ZZZ \t\t Polio Vaccination \t\t 28 Feb, 2023 \t\t Ahmedabad \t Sent Successfully`);
        }, 2000);
    });
}

// Main function
inform(toXXX, toYYY, toZZZ);