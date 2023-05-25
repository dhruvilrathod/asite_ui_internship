var obj1 = {
    a: 10
}

var obj2 = {
    a:10
}

console.log(obj1 == obj2); // will return false

const obj3 = {
    a: 10,
    b: 20
}

// obj3 = {
//     a: 30,
//     b: 40
// }
// this will produce error

//this will work even if the obj id constant
obj3.a = 30;
obj3.b = 40;
console.log(obj3);

for(var x in obj3) {
    console.log(x); // this will log the name of keys or properties from the object
    console.log(obj3[x]); // this will log the corrosponding values of property x
}

var arr = [1,2,3];

for(var x in arr) {
    console.log(x); // this will return index starting from 0
    console.log(arr[x]); // this will return value stored at corrosponding index
}
console.log('------------');
for(var x of arr) {
    console.log(x); // this will directly return value
    console.log(arr[x]); // this is useless with 'of'
}

var res = arr.filter((d) => d <= 2);
console.log(res);
console.log(arr);