const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class Student {
    constructor(name, id, number, rating, mentor) {
        this.name = name;
        this.id = id;
        this.number = number;
        this.rating = rating;
        this.mentor = mentor;
    }
}

var students = [];

// this will randomly add students
function addStudents() {
    for (let i = 0; i < 20; i++) {
        var s = new Student(`Student ${i}`, Math.floor(Math.random() * (999 - 100 + 1) + 100), Math.floor(Math.random() * (9999999999 - 6666666666 + 1) + 6666666666), Math.floor(Math.random() * 6), (Math.floor(Math.random() * 5)) % 3 == 0 ? null : `Mentor ${i}`);
        students.push(s);
    }
}

// time complexity O(n) and space complexity O(n)
function sortByMentor(arr) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].mentor == null) arr1.push(arr[i]);
        else arr2.push(arr[i]);
    }
    arr = arr1.concat(arr2);
    return arr;
}


// time complexity: O(n log n) quick sort
function sortById(arr) {
    if (arr.length < 2) return arr;
    var pivot_node = arr[arr.length - 1];
    var pivot = pivot_node.id;
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].id <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...sortById(left), pivot_node, ...sortById(right)];
}

function search(n) {
    return students.filter((d) => {
        if (d.mentor == null)
            return d.name.toLowerCase().includes(n) || d.id.toString().includes(n) || d.number.toString().includes(n) || d.rating.toString().includes(n);
        else return d.mentor.includes(n) || d.name.toLowerCase().includes(n) || d.id.toString().includes(n) || d.number.toString().includes(n) || d.rating.toString().includes(n);
    });
}

/*
Value to check = start + {(value - array[start]) * (end - start)} / (array[end] - array[start]);

[11, 21, 33, 47, 75] 47

0 + (47 - 11)*4/64 = 2.25 no
1 + (47 - 21)*3/54 = 2.44 no
2 + (47 - 33)*2/42 = 2.66 no
3 + (47 - 47)*1/28 = 3 no
4 + (47 - 75)*0/0 = impossible

*/

addStudents();

console.log('List of all students');
console.table(students);

console.log('Sorting student according to mentors and ID');
students = sortById(students);
students = sortByMentor(students);
console.table(students);

rl.question("Enter the search value: ", (ans) => {
    var result = search(ans);
    console.log(`Search result`);
    console.table(result);
    process.exit(0);
})