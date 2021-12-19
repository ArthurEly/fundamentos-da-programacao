var array = [1,4,3,2];
var arrayLength = array.length;
var reverseArray = [];
for(var i=0;i<arrayLength;i++){
    //adiciono no reverseArray o ultimo valor do array original, conforme o LIFO (Ultimo a entrar (ultima posição do array) é o que tem que sair)
    reverseArray.push(array.pop())
}
console.log(reverseArray)