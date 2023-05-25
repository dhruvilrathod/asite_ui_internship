var printLogger = {
    logs: ['log1', 'log2', 'log3', 'log4'],
    printLog: function (index: number) {
        console.log(`[printLogger Object] ${this.logs[index]}`);
        return;
    },
    printExtraInfo: function (args: any, timeStamp: number) {
        console.log(`[logRequestFired] @ ${timeStamp}`);
        console.log(args);

    }
}

interface LogDetails {
    logDetailsArr: any[],
    setLogDetails: any,
}

var logDetails: LogDetails = {
    logDetailsArr: [],
    setLogDetails(log: string, date: string, by: string, summary: string) {
        var temp: any = {
            logID: log,
            date: date,
            by: by,
            summary: summary
        }
        this.logDetailsArr.push(temp);
    }
};


console.log('Available logs:');

for (var i = 0; i < printLogger.logs.length; i++) {
    printLogger.printLog.call(printLogger, i);
}

console.log('Applying additional info:');

for (var i = 0; i < printLogger.logs.length; i++) {
    logDetails.setLogDetails.apply(logDetails, [printLogger.logs[i], `Date ${i + 1}`, `author ${i + 1}`, `summary ${i + 1}`]);
}

console.log(logDetails.logDetailsArr);

console.log('Firing some loggin requests');

for (var i = 0; i < printLogger.logs.length; i++) {
    let timeStamp = new Date().getTime();
    let logRequestFired = printLogger.printExtraInfo.bind(logDetails, logDetails.logDetailsArr[i], timeStamp);
    logRequestFired();
}
