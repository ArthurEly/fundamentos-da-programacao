var n = 2
var finalString = "";

for (var i=n; i>0; i--){
    var stairs = ""; 
    for (var j=0; j<i-1; j++){
        stairs += " "
    }
    while(stairs.length !== n){
        stairs += "#"
    }
    finalString +=  stairs + '\n' 
}

console.log(finalString.slice(0, -1)) //slice é pra retirar o último '\n' pra encaixar o espaço certinho