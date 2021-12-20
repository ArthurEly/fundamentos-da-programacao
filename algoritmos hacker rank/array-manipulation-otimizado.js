//versão otimizada do array-manipulation.js
//nao fui eu que fiz, peguei dessa referencia https://dev.to/amyshackles/array-manipulation-javascript-solution-58bj
//vou apenas explicar o que eu entendi sobre

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