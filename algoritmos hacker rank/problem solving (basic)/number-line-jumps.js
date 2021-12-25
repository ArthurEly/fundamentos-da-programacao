var x1= 0; //localização do primeiro canguru
var v1= 3; //o quanto ele pula
var x2= 4; //localização do segundo canguru
var v2= 2; //o quanto ele pula

var x1 = 1571;
var v1 = 4240;
var x2 = 9023;
var v2 = 4234;

var seSeEncontram = "NO";
if (x1 > x2 && v1 > v2){
    return seSeEncontram;
}

if (x2 > x1 && v2 > v1){
    return seSeEncontram;
}

for (var i = 1; i<=10000; i++){
    console.log(i)
    if ((x1+v1*i) == (x2+v2*i) ){
        seSeEncontram = "YES"
        break;
    }
}

console.log(seSeEncontram)


