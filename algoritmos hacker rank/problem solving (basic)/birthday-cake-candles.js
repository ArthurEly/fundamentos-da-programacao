var candles = [4,4,1,3]
var valorMaximo = Math.max.apply(null, candles);
var quantidadeTotal = 0;

candles.forEach(valor => {
    if (valor == valorMaximo){
        quantidadeTotal++;
    }
})

console.log(quantidadeTotal);