// s -> onde começa a casa 
// t -> onde termina a casa
// a -> onde ta a árvore de maça
// b -> onde ta a árvore de laranja
//
// a < s < t < b
//
const s = 7;
const t = 11;
const a = 5;
const b = 15;
var macas = [-2, 2, 1] //localização das maças
var laranjas = [5, -6] //localização das laranjas

//filtrar as localizações válidas pra dar uma leve otimizada
var localizacaoMacas = macas.filter(x => {
    if(x > 0){ //se cair à esquerda da árvore de maça nao tem com chegar na casa
        return x;
    } 
})

var localizacaoLaranjas = laranjas.filter(x => {
    if(x < 0){ //se cair à direita da árvore de laranja nao tem como chegar na casa
        return x;
    } 
})

var macasQueCairamNaCasa = verificarQuantasCairamNaCasa(localizacaoMacas,a)
var laranjasQueCairamNaCasa =verificarQuantasCairamNaCasa(localizacaoLaranjas,b)

function verificarQuantasCairamNaCasa(localizacaoFrutas,localizacaoArvore){
    for (var i = 0; i<localizacaoFrutas.length; i++){
        localizacaoFrutas[i] += localizacaoArvore; //ver a localização da maçã no eixo X
    }

    var quantidadeQueCaiuNaCasa = localizacaoFrutas.filter(x =>{
        if(x >= s && x <= t){ //se se ta dentro da "área" da casa
            return x;
        }
    })

    return quantidadeQueCaiuNaCasa;
}

console.log(macasQueCairamNaCasa.length + "\n" + laranjasQueCairamNaCasa.length)