var scores = [0, 9, 3, 10, 2, 20]

var valorMinimo = scores[0]; 
var contadorMinimo = 0;
var valorMaximo = scores[0]; 
var contadorMaximo= 0;

scores.forEach(valor => {
    if (valor > valorMaximo){
        valorMaximo = valor;
        contadorMaximo++;
    }

    if(valor < valorMinimo){
        valorMinimo = valor;
        contadorMinimo++;
    }
})

console.log(contadorMaximo)
console.log(contadorMinimo)