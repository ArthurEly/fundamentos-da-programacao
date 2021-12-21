// EXPLICAÇÃO
// n -> 10
// queries -> [[1,5,3],[4,8,7],[6,9,1]]
//
// v--interprete as queries como--v
// a b k
// 1 5 3 -> primeira query
// 4 8 7 -> segunda query
// 6 9 1 -> terceira query
//
// index(índice)->	 1 2 3  4  5 6 7 8 9 10
// 	        [0,0,0, 0, 0,0,0,0,0, 0] < versão pura do array
// 	        [3,3,3, 3, 3,0,0,0,0, 0] < primeira versão do array
// 	        [3,3,3,10,10,7,7,7,0, 0] < segunda versão do array
// 	        [3,3,3,10,10,8,8,8,1, 0] < terceira versão do array

//lógica do problema
// n é o número de "colunas" do problema, que está representado acima como "index(índice)->    1 2 3.."
// queries sao os números que temos que manipular no array, sendo:
    //a -> índice da esquerda (da pra entender como: onde que a gente COMEÇA a somar)
    //b -> índice da direita  (da pra entender como: onde que a gente TERMINA a somar)
    //k -> número a ser somado

//EXEMPLO DE APLICAÇÃO DO LOGARITMO
//
// OBS.:quando eu falar entre, considere como se fosse um conjunto fechado, com as extremidades indo junto
//
// (1) aplicando a primeira query
// a b k
// 1 5 3 -> primeira query
// tenho que somar K entre A e B, ou seja:
// tenho que somar 3 entre os índices 1 e 5
//
//resultado da primeira versão do array, após a aplicação da primeira query:
//
// 1 2 3  4  5 6 7 8 9 10
//[3,3,3, 3, 3,0,0,0,0, 0] < primeira versão do array
//
//___________________________________________________________________________
// (2) aplicando a segunda query
// a b k
// 4 8 7 -> segunda query
// tenho que somar K entre A e B, ou seja:
// tenho que somar 7 entre os índices 4 e 8
//
//resultado da segunda versão do array, após a aplicação da segunda query:
//
// 1 2 3  4  5 6 7 8 9 10
//[3,3,3,10,10,7,7,7,0, 0] < segunda versão do array
//___________________________________________________________________________
// (3) aplicando a terceira query
// a b k
// 6 9 1 -> terceira query
// tenho que somar K entre A e B, ou seja:
// tenho que somar 1 entre os índices 6 e 9
//
//resultado da terceira versão do array, após a aplicação da terceira query:
//
// 1 2 3  4  5 6 7 8 9 10
//[3,3,3,10,10,8,8,8,1, 0] < terceira versão do array
//___________________________________________________________________________
//tendo o resultado da última versão do array, só pegar o maior número encontrado no array e eras isso :)
//
//OBS.: esse versão eu fiz sem otimização, até porque no presente momento nao sei como otimizar um algoritmo
//      o arquivo otimizado é o hards/array-manipulation-otimizado.js
//      mas ja consegui ficar feliz de estabelecer uma lógica ao problema, mesmo nao sendo tao performático 
//
//CÓDIGO ABAIXO
var n = 10 
var arrayResultado = definirTamanhoDoArray(n)
function definirTamanhoDoArray(n){
    var arrayBase = [];
    for (var i=0; i<n; i++){
        arrayBase.push(0)
    }
    return arrayBase;
}


var queries = [[1,5,3],[4,8,7],[6,9,1]];
var numeroDeRepeticoes = queries.length;

for (var i=0; i<numeroDeRepeticoes; i++){
    var indiceComeco = (queries[i][0] - 1)
    var indiceFim = (queries[i][1] - 1)
    var numeroParaSomar = queries[i][2]
    realizarSomaNosIndices(numeroParaSomar,indiceComeco,indiceFim)
}

function realizarSomaNosIndices(numeroParaSomar, indiceComeco, indiceFim){
    for(var i = indiceComeco; i<=indiceFim; i++){
        arrayResultado[i] += numeroParaSomar;
    }
}

console.log(pegarValorMaximo(arrayResultado))

function pegarValorMaximo(array){
    var valorMaximo = 0;
    for (var i=0; i<array.length; i++){
        if(array[i] > valorMaximo){
            valorMaximo = array[i]
        }
    }
    return valorMaximo;
}