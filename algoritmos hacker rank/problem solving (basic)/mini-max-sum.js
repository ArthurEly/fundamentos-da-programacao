const array = [1,2,3,4,5]

var miniDefinitivo = 0;
var maxDefinitivo = 0;
for (var i=0; i<array.length; i++){   
    var novoArray = array.filter((x,row) => {
        return row !== i;
    })

    var soma = 0;
    for (var j=0; j<novoArray.length; j++){
        soma += novoArray[j]
    }

    var maxAtual = soma;
    var miniAtual = soma;
    if(maxAtual > maxDefinitivo){
        maxDefinitivo = maxAtual;
    }
    if (miniAtual < miniDefinitivo || miniDefinitivo == 0){
        miniDefinitivo = miniAtual
    }
}

console.log(maxDefinitivo + '\n' + miniDefinitivo)