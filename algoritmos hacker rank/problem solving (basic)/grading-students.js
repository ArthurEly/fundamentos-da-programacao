var notas = [73,67,38,33];
var notasArredondadas = [];

notas.forEach( nota =>{
    if(nota >= 38){
        var notaHolder = nota;
        for(var i=1; i<3; i++){
            notaHolder++;
            console.log(notaHolder)
            if(notaHolder % 5 == 0){
                notasArredondadas.push(notaHolder);
                break;
            }  
            if (i ==2){
                notasArredondadas.push(nota);      
            }       
        }
    } else {
        notasArredondadas.push(nota);
    }
})

console.log(notasArredondadas)