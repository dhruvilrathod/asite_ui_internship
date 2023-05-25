var i=1;
while (i<=100) {
    var x = [(i % 3 == 0 && i % 5 == 0), (i % 3 == 0), (i % 5 == 0)]
    switch (JSON.stringify(x)) {
        case JSON.stringify([true, true, true]):
            console.log(`FizzBuzz`);
            break;
        case JSON.stringify([false, true, false]):
            console.log(`Fizz`);
            break;
        case JSON.stringify([false, false, true]):
            console.log(`Buzz`);
            break;
        default:
            console.log(i);
            break;
    }
    i++;
}