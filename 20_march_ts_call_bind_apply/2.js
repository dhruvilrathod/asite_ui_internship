"use strict";
var callAccepter = {
    call: {},
    acceptCall: function (call, callDivert = false) {
        if (!callDivert) {
            this.call = call;
            console.log(`[callAcceptor] Accepted Call:`, call);
            return true;
        }
        else
            return call;
    },
    divertCall: function (call) {
        this.call = call;
        console.log(`[callDiverter] Call Diverted:`, call);
        return true;
    }
};
var callGenerator = {
    call: {
        date: '1-1-1',
        by: 'abc',
        country: 'xyz'
    },
    makeCall: function () {
        return this.call;
    }
};
var myCall = callGenerator.makeCall.call(callGenerator);
console.log(myCall);
var call = callAccepter.acceptCall.bind(myCall);
var success = call(myCall);
success = call(myCall, true);
if (success !== true) {
    var call1 = callAccepter.divertCall.bind(myCall);
    call1(myCall);
}
