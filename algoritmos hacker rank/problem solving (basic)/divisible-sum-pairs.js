var ar = [1,2,3,4,5,6]
var k = 5;
var n = ar.length;

var paresDivisiveis = 0;
ar.forEach((valor, i) => {
    var indicesMaiores = ar.filter((x,j) => {//umas das condições era i < j 
        return j > i;
    })

    for (var j=0; j<indicesMaiores.length; j++){
        if ((valor + indicesMaiores[j]) % k === 0){
            paresDivisiveis++;
        }
    }
})

console.log(paresDivisiveis);