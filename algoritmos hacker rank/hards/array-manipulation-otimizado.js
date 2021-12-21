//versão otimizada do array-manipulation.js
//nao fui eu que fiz, peguei dessa referencia https://dev.to/amyshackles/array-manipulation-javascript-solution-58bj
//vou apenas explicar o que eu entendi sobre quando eu tiver preprarado pra voltar aqui

/*
    1  2   3   4   5   6   7   8  9  10  11  12  13 // Indices
*/
// [0, 0,  0,  0,  0,  0,  0,  0, 0,  0, 0,  0,  0] // Starting array
// [0, 4,  4,  4,  4,  4,  4,  0, 0,  0, 0,  0,  0] // After [2,7,4]
// [0, 4,  0,  0,  6,  6,  6,  2, 2,  0, 0,  0,  0] // After [5,9,2]

// [0, 4,  0,  0,  6,  14, 8,  8, 8,  8, 8,  8,  0] // normal
// [0, 4,  0,  0,  2,  8,  0, -4, 0, -2, 0,  0, -8] // otimizado

function arrayManipulation(n, queries) {
    let arr = new Array(n + 1).fill(0);
    queries.forEach(([a, b, k]) => {
        arr[a - 1] += k;
        arr[b] -= k;
    })
    let sum = 0;
    let max = 0;
    arr.forEach(val => {
        sum += val;
        max = Math.max(sum, max)
    })
    return max;
}