var array = [1,4,3,2];
var arrayLength = array.length;
var reverseArray = [];
for(var i=0;i<arrayLength;i++){
    reverseArray.push(array.pop())
}
console.log(reverseArray)