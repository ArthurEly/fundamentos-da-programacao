var arr = [-4,3,-9,0,4,1];
var positivos = 0;
var negativos = 0;
var zero = 0;
for(var i=0;i<arr.length;i++){
    if (arr[i]>0){
        positivos++;
    }
    else if (arr[i]<0){
        negativos++;
    }
    else {
        zero++
    }
}
positivos = (positivos/arr.length).toFixed(6)
negativos = (negativos/arr.length).toFixed(6)
zero = (zero/arr.length).toFixed(6)
console.log(positivos + '\n' + negativos + '\n' + zero)

console.log("um outro modo que achei no stackoverflow")
console.log("v--explicação--v")
let positive1 = arr.filter(number=>number>0)
console.log("filtrei o array com número positivos: ["+positive1+"]")
let positive2 = arr.filter(number=>number>0).length
console.log("peguei o comprimento do array filtrado : "+positive2)
let positive3 = arr.filter(number=>number>0).length/arr.length; //código final
console.log("dividi pelo comprimento do array original, conforme o código : "+positive3)
