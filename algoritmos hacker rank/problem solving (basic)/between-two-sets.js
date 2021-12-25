//https://studyalgorithms.com/array/hackerrank-between-two-sets/
//só consegui entender dps que vi esse site ai

// ver se existem divisores de b que sejam multiplos comuns de a

var a = [2, 6]
var b = [24, 36]
var multiplosDeA = [];
var divisoresDeB = [];

b.forEach(valor =>{
    for(var i=valor; i>0; i--){
        if(valor % i == 0){
            divisoresDeB.push(i)
        }
    }   
})

// define o limite máximo de multiplicação com base no maior divisor comum de b (todo número é divísel por ele mesmo, entao basta só pegar o maior número de b para achar o maior divisor comum de b), 
// se tiver uma multiplicação que passe desse número nunca vai estar na interseceção, entao seria desperdício de cpu
var limiteDeMultiplicacao = Math.max.apply(null, b) 
a.forEach(valor =>{
    var multiploAtual = 0;
    for(var i=1; multiploAtual<limiteDeMultiplicacao; i++){
        multiploAtual = valor*i;
        multiplosDeA.push(multiploAtual)
    }   
})

//MODELO DE INTERSECCAO ENTRE "INFINITOS" ARRAYS
for (var j=0; j<b.length-1; j++){
    var interseccaoDivisoresB = [];
    for (var i=0; i<divisoresDeB.length; i++){
        var valor = divisoresDeB[i];
        if (divisoresDeB.indexOf(valor) !== i){
            interseccaoDivisoresB.push(divisoresDeB[i])
        }
    }
    divisoresDeB = interseccaoDivisoresB;
}
console.log(divisoresDeB)

for (var j=0; j<a.length-1; j++){
    var interseccaoMultiplosA = [];
    for (var i=0; i<multiplosDeA.length; i++){
        var valor = multiplosDeA[i];
        if (multiplosDeA.indexOf(valor) !== i){
            interseccaoMultiplosA.push(multiplosDeA[i])
        };
    }
    multiplosDeA = interseccaoMultiplosA;
}
console.log(multiplosDeA)

var interseccaoAnB = multiplosDeA.filter(function(multiplo){
    return divisoresDeB.includes(multiplo);
})
console.log(interseccaoAnB);
