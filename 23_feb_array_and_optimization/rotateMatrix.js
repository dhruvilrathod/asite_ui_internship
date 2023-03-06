const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Generating random matrix
const generateMatrix = (n) => {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < n; j++) {
            matrix[i].push(Math.floor(Math.random() * (99 - 10)) + 1);
        }
    }
    return matrix;
}

// Index Calculation Approach 
function indexCalulationApproach(matrix) {
    const n = matrix.length;
    var transformed = [];
    for (var i = 0; i < n; i++) {
        transformed.push([]);
        for (var j = 0; j < n; j++) {
            transformed[i].push();
        }
    }
    var row1 = 0, col1 = 0, row_new = 0, col_new = n - 1;
    var count = 0;
    for (var x = 0; x < n * n; x++) {
        if (count < n) {
            col1 = count;
            row_new = count;
            count++;
        } else {
            row1++;
            col_new--;
            col1 = 0;
            row_new = 0;
            count = 1;
        }
        transformed[row1][col1] = matrix[row_new][col_new];
    }
    return transformed;
}

// Rotate Matrix with the help of Secondary Array. 
const secondaryArayApproach = (matrix) => {
    let n = matrix.length;

    let tempMatrix = new Array(n);
    for (let i = 0; i < n; i++) {
        tempMatrix[i] = new Array(n);
    }

    let lastIndex = n - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tempMatrix[lastIndex - j][i] = matrix[i][j];
        }
    }

    return tempMatrix;
}

// Rotate Matrix without Extra Space 
const optimalApproach = (matrix) => {
    let n = matrix.length;
    let lastIndex = n - 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[lastIndex - j][lastIndex - i];
            matrix[lastIndex - j][lastIndex - i] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][lastIndex - j];
            matrix[i][lastIndex - j] = temp;
        }
    }

    return matrix;
}

let userMatrix;
rl.question("How many row and cols in your Matrix  : ", function (n) {

    // Generating Matrix of size n X n
    userMatrix = generateMatrix(n);

    console.log("Before Rotating Matrix : ")
    console.table(userMatrix)

    // Brutforce Approach : Rotate Matrix using External Array and Swapping Index
    userMatrix = indexCalulationApproach(userMatrix);
    console.log("After Rotating Matrix (90 Degree Left with Extra space and Index Swap Approach) : ")
    console.table(userMatrix)

    // Better Approach : Rotate Matrix using External Array
    userMatrix = secondaryArayApproach(userMatrix);
    console.log("After Rotating Matrix (90 Degree Left with Extra space (Secondary Array) Approach) : ")
    console.table(userMatrix)

    // Optimal Approach : Rotate Matrix using Swap position without Extra Space
    userMatrix = optimalApproach(userMatrix);
    console.log("After Rotating Matrix (90 Degree Left without extra Space Approach) :")
    console.table(userMatrix)

    rl.close();
    process.exit(0);
});