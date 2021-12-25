var arr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4]

// var tiposDePassaro = [];
// var vezesAvistados = [];

arr = arr.sort();
console.log(arr)


var tipoQueMaisSeRepete = 0;
var tipoAtual = arr[0];

var vezesQueSeRepete = 0;
var vezesQueSeRepeteAtual = 0;

for (var i=0; i<arr.length; i++){
    if (arr[i] == tipoAtual){
        // tipoAtual = arr[i];
        vezesQueSeRepeteAtual++;
        if(i==arr.length-1){
            definirQualTipoMaisSeRepete();
        }
    } else if(arr[i] !== tipoAtual) {
        definirQualTipoMaisSeRepete();
        vezesQueSeRepeteAtual = 1;
        if (i==arr.length){
            tipoAtual = arr[i+1];
        }else{
            tipoAtual = arr[i];
        }
    }
}

function definirQualTipoMaisSeRepete(){
    if (vezesQueSeRepeteAtual > vezesQueSeRepete){
        vezesQueSeRepete = vezesQueSeRepeteAtual;
        tipoQueMaisSeRepete = tipoAtual;
    }
}

console.log(tipoQueMaisSeRepete)