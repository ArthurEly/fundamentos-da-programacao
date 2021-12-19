var array =[
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

var primeiroHourglass = [
    [array[0][0],array[0][1],array[0][2]],
    [array[1][1]],
    [array[2][0],array[2][1],array[2][2]]
]
//i = 0;
//j = 0;
// var primeiroArray = [
//     [array[i][j],array[i][j+1],array[i][j+2]],
//     [array[i+1][j+1]],
//     [array[i+2][j],array[i+2][j+1],array[i+2][j+2]]
// ]

var segundoHourglass = [
    [array[0][1],array[0][2],array[0][3]],
    [array[1][2]],
    [array[2][1],array[2][2],array[2][3]]
]
// i = 0
// j = 1
// var primeiroArray = [
//     [array[i][j],array[i][j+1],array[i][j+2]],
//     [array[i+1][j+1]],
//     [array[i+2][j],array[i+2][j+1],array[i+2][j+2]]
// ]

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


var hourglassSumResult = 0;
var hourglassesSumResult = [];
for (var i=0; i<16;i++){
    hourglassSumResult = 0;
    for (var j=0; j<3 ;j++){
        var sum = 0;
        for (var k=0; k<hourglasses[i][j].length ;k++){
            sum += hourglasses[i][j][k]
        }
        hourglassSumResult += sum;
    }
    hourglassesSumResult.push(hourglassSumResult)
}

var highestHourglassSumResult = Math.max.apply(null, hourglassesSumResult);
console.log(hourglassesSumResult)
console.log(highestHourglassSumResult)