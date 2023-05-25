function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return (result) => { return result + 1; }
    };
}
var a = noisy(Math.min)(3, 2, 1)(5);
console.log(a);

/* 
a = noisy(f) == noisy(Math.min) == (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return (result) => { return result + 1; }
    };

noisy(f)(3,2,1) == noisy(Math.min)(3,2,1) == (...args) {...} == (3,2,1) {...}

(3,2,1) == {
        console.log("calling with", (3,2,1));
        let result = Math.min((3,2,1));
        console.log("called with", args, ", returned", 1);
        return (result) => { return result + 1; }
};

noisy(f)(3,2,1)(5) == (result) => { return result + 1; }


*/