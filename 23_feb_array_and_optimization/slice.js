// Declaring the slice method in prototype of object0
Array.prototype.mySlice = function (start = 0, end = this.length) {
    if(end > this.length) end = this.length;
    if(start < 0) start = start + this.length;
    if(end < 0) end = end + this.length;
    var tempReturn = [];
    for (var i = start; i < end; i++) {
        tempReturn.push(this[i]);
    }
    return tempReturn;
};

// Creating array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Calling the function

// Simple usecases
console.log(animals.mySlice(1));
console.log(animals.mySlice(2));
console.log(animals.mySlice(2,4));

// works with negative indexing as well
console.log(animals.mySlice(1,-1));
