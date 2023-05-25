var printLogger = {
    logs: ['log1', 'log2', 'log3', 'log4'],
    printLog: function (index) {
        console.log(`[printLogger Object] ${this.logs[index]}`);
        return;
    }
}

var logDetails = {
    logDetailsArr: [],
    setLogDetails(log, date, by, summary) {
        var temp = {
            logID: log,
            date: date,
            by: by,
            summary: summary
        }
        this.logDetailsArr.push(temp);
        console.log(this.logDetailsArr);
    }
};

for (var i = 0; i < printLogger.logs.length; i++) {
    printLogger.printLog.call(printLogger, i);
}

console.log('applying additional info');

for (var i = 0; i < printLogger.logs.length; i++) {
}
logDetails.setLogDetails.apply(logDetails, [printLogger.logs[0], 'date2', 'by1', 'su1']);

