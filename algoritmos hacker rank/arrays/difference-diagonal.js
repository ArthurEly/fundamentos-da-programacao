var array= [
    [1, 2,  3,  4],
    [5, 6,  7,  8],
    [9, 11, 11, 12],
    [12,13, 14, 15],

]
var columns = array[0].length;
var rows = array.length;

// sempre vai seguir igual vindo da primeira diagonal
//3^2
//array[0][0]
//array[1][1]
//array[2][2]

//4^2
//array[0][0]
//array[1][1]
//array[2][2]
//array[3][3]
var firstDiagonalSum = 0;

//enquanto as linhas aumentam de um em um, as colunas diminuem de um em um da quantidade de colunas
//3^2
//   vai de 0 à 2   
//      v
//array[0][2] < vai de 2 à 0
//array[1][1]
//array[2][0]

//4^2
//array[0][3] 
//array[1][2]
//array[2][1]
//array[3][0]
var secondDiagonalSum = 0;
if (columns=rows){
    for(var i=0;i<rows;i++){
        firstDiagonalSum += array[i][i]
        //columns-1 para encaixar com os índices
        var sdColumns = (columns-1)-i
        if (sdColumns <= 0){
        }
        secondDiagonalSum += array[i][sdColumns];
    }
}
console.log("soma da primeira diagonal "+firstDiagonalSum)
console.log("soma da segunda diagonal "+secondDiagonalSum)
console.log("a diferença é "+Math.abs(firstDiagonalSum-secondDiagonalSum))