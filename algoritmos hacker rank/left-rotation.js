//mover o índice 0 para o último índice do array

var array = [1, 2, 3, 4, 5]
var d = 4

for(var i=0; i<d ;i++ ){
    //adiciona o valor do primeiro índice no último índice do array
    array.push(array.shift())
}

console.log(array)

