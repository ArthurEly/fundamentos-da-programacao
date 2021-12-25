var s = [2,2,1,3,2]
var d = 4;
var m = 2;
var quantidadeDeChocolate = 0;

for (var i=0; i<(s.length-m+1); i++){
    var valor = s[i]
    var soma = valor;
    
    for (var j=1; j<m; j++){
        soma += s[i+j];
    }

    if (soma == d){
        quantidadeDeChocolate++;
    }
}

console.log(quantidadeDeChocolate)