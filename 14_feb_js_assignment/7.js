// Function to invoke callback chain
function inform(callBack1, callBack2, callBack3) {
    console.log('Sending invite to respective people...');
    console.log(`Event Type \t\t Date \t\t\t Venue \t\t\t\t Status`);
    callBack1(callBack2, callBack3);
}

// Function to send invite to HTML
function toHTML(callBack1, callBack2) {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`HTML Evenet \t\t 20 Feb, 2023 \t\t Apple Inc, California \t\t Sent Successfully`);
        }, 2000);
    }).then(() => {
        callBack1(callBack2)
    });
}

// Function to send invite to JS
function toJS(callBack1) {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`JS Evenet \t\t 23 Feb, 2023 \t\t Google Inc, California \t Sent Successfully`);
        }, 2000);
    }).then(() => {
        callBack1()
    });
}

// Function to send invite to CSS
function toCSS() {
    const htmlInvite = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
            console.log(`CSS Evenet \t\t 28 Feb, 2023 \t\t Asite Inc, Ahmedabad \t\t Sent Successfully`);
        }, 2000);
    });
}

// Main function
inform(toHTML, toJS, toCSS);