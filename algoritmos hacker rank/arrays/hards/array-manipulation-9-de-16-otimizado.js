//versão otimizada do array-manipulation.js
//passou em 9 dos 16 testes 

    var n = 10;
    var queries = [[1,2,100],[2,5,100],[3,4,100]]
    var array = new Array(n).fill(0);
    var valoresASomar = [];

    queries.forEach(([a,b,k],i)=>{
        var id = i+1;
        valoresASomar.push([k,id,(a-1),(b-1)])

        if (array[a-1] !== 0){
            array[a-1].unshift([k,id]);
        } else {
            array[a-1] = [[k,id]];
        }

        if (array[b-1] !== 0){
            array[b-1].unshift([k,id]);
        } else {
            array[b-1] = [[k,id]];
        }
    })

    realizarSomaNosIndices()

    function realizarSomaNosIndices(){
        for (var i=0; i<valoresASomar.length; i++){
            for (var j=valoresASomar[i][2]; j<valoresASomar[i][3]+1; j++){
                if (array[j] !==0){
                    if (valoresASomar[i][1] !== array[j][0][1]){
                        array[j][0][0] += valoresASomar[i][0]
                    } 
                }
            }       
        }
    }

    function buscarValorMaximo(array){
        var maxDefinitivo = 0;
        for (var i=0; i<array.length; i++){
            if(array[i] !== 0){
                var maxAtual = array[i][0][0]
                if(maxAtual > maxDefinitivo){
                    maxDefinitivo = maxAtual;
                }
            }
        }
        return maxDefinitivo;
    }
        
    console.log(buscarValorMaximo(array))
