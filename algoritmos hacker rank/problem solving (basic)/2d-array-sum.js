var array =[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

//MINHA LÓGICA MANUAL
// v---retorna o valor da primeira ampulheta---v
// var primeiroHourglass = [
//     [array[0][0],array[0][1],array[0][2]],
//     [array[1][1]],
//     [array[2][0],array[2][1],array[2][2]]
// ]
//
// se definirmos:
// i = 0;
// j = 0;
// temos:
// var primeiroArray = [
//     [array[i][j],array[i][j+1],array[i][j+2]],
//     [array[i+1][j+1]],
//     [array[i+2][j],array[i+2][j+1],array[i+2][j+2]]
// ]
//
// para ver se o padrão continua, aplicamos na segunda ampulheta, porém, com um/dois valores alterados
//
// i = 0 > pq continua na mesma "linha"
// j = 1 > mas muda a "coluna"
//
// var segundoHourglass = [
//     [array[0][1],array[0][2],array[0][3]],
//     [array[1][2]],
//     [array[2][1],array[2][2],array[2][3]]
// ]
// e, então, temos:
// var primeiroArray = [
//     [array[i][j],array[i][j+1],array[i][j+2]],
//     [array[i+1][j+1]],
//     [array[i+2][j],array[i+2][j+1],array[i+2][j+2]]
// ]
// como o padrão nao mudou, só fazer um for() com base nesse padrão que achamos

var hourglass = [];
var hourglasses = [];
for(var i = 0;i < 4;i++){
    for (var j = 0;j < 4;j++){
        hourglass = [
            [array[i][j],array[i][j+1],array[i][j+2]],
            [array[i+1][j+1]],
            [array[i+2][j],array[i+2][j+1],array[i+2][j+2]]
        ]
        hourglasses.push(hourglass)
    }
}
console.log(hourglasses)
// foi retornado essas ampulhetas aqui
// [
//     [ [ 1, 1, 1 ], [ 1 ], [ 1, 1, 1 ] ], > imagine como : [ 1, 1, 1 ]
//     [ [ 1, 1, 0 ], [ 0 ], [ 1, 1, 0 ] ],                     [ 1 ]
//     [ [ 1, 0, 0 ], [ 0 ], [ 1, 0, 0 ] ],                  [ 1, 1, 1 ]                           
//     [ [ 0, 0, 0 ], [ 0 ], [ 0, 0, 0 ] ],
//     [ [ 0, 1, 0 ], [ 1 ], [ 0, 0, 2 ] ],
//     [ [ 1, 0, 0 ], [ 1 ], [ 0, 2, 4 ] ],
//     [ [ 0, 0, 0 ], [ 0 ], [ 2, 4, 4 ] ],
//     [ [ 0, 0, 0 ], [ 0 ], [ 4, 4, 0 ] ],
//     [ [ 1, 1, 1 ], [ 0 ], [ 0, 0, 0 ] ],
//     [ [ 1, 1, 0 ], [ 2 ], [ 0, 0, 2 ] ],
//     [ [ 1, 0, 0 ], [ 4 ], [ 0, 2, 0 ] ],
//     [ [ 0, 0, 0 ], [ 4 ], [ 2, 0, 0 ] ],
//     [ [ 0, 0, 2 ], [ 0 ], [ 0, 0, 1 ] ],
//     [ [ 0, 2, 4 ], [ 0 ], [ 0, 1, 2 ] ],
//     [ [ 2, 4, 4 ], [ 2 ], [ 1, 2, 4 ] ],
//     [ [ 4, 4, 0 ], [ 0 ], [ 2, 4, 0 ] ]
// ]

// para fazer a soma de cada parte de cada ampulheta, tenho que :
// * -> ir até cada ampulheta, localizadas nas linhas (i)
// ** -> ir em cada parte da ampulheta (superior, meio, inferior) (j)
// *** -> somar os valores(k)que encontrei em cada parte da ampulheta
//depois eu adiciono a soma de cada ampulheta em outro array (no caso, hourglassesSumResult)

var hourglassSumResult = 0;
var hourglassesSumResult = [];
for (var i=0; i<16;i++){ // *
    hourglassSumResult = 0;
    for (var j=0; j<3 ;j++){ // **
        var sum = 0;
        for (var k=0; k<hourglasses[i][j].length ;k++){ // ***
            sum += hourglasses[i][j][k]
        }
        hourglassSumResult += sum;
    }
    hourglassesSumResult.push(hourglassSumResult)
}

var highestHourglassSumResult = Math.max.apply(null, hourglassesSumResult); //por ultimo, retorno ja o valor maximo dentro do array
console.log(hourglassesSumResult)
console.log(highestHourglassSumResult)