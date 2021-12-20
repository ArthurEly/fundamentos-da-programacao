//https://www.youtube.com/watch?v=4tYoVx0QoN0&ab_channel=Cl%C3%A9mentMihailescu
//devo ter demorado umas 2h~2h30min pra pensar nisso
//justo por ser meu começo nesse lance de algoritmos
//fiz o código antes de ver a resolução do vídeo para saber se conseguiria fazer sem ajuda, somente com a explicação do que que teria que ser feito

// CÓDIGO BASEADO EM MATRIZES COM LINHAS E COLUNAS DE QTDES IGUAIS

var array = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]

// v--template pra teste--v
var array = [
    // [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0],
]
var comprimentoDaMatriz = array.length;
var valorMaximoPermitido = comprimentoDaMatriz-1;//pra bater com os índices da matriz

//encontrar e define os números 1 da borda da matriz como "b"
for (var i= 0; i<comprimentoDaMatriz; i++){
    for (var j= 0; j<comprimentoDaMatriz; j++){
        if (array[i][j] == 1){
            if(taNaBorda(i,j)){
                array[i][j] = "b";
            }
        }
    }  
}

function taNaBorda(i,j){
    if(i == 0 || i == valorMaximoPermitido || j == 0 || j == valorMaximoPermitido){
        return true
    }else{
        return false;
    }
}

//marca as extremidades horizontais e verticais dos números 1 da borda, que agora são b's
//isso se repete a quantidade de colunas que há no array, pra se adaptar a matrizes maiores ou menores
//OBS.: isso considerando um mapa quadrático
for (var qtdeDeColunas = comprimentoDaMatriz; qtdeDeColunas>0 ; qtdeDeColunas--){
    console.log("olá")
    for (var i= 0; i<comprimentoDaMatriz; i++){
        for (var j= 0; j<comprimentoDaMatriz; j++){
            if (array[i][j] == "b"){
                marcarExtremidades(i,j,qtdeDeColunas)
            }
        }  
    }
}

function marcarExtremidades(i,j){
    //como identica as extremidades? (no vídeo, nao conta nada de diagonal, somente horizontal e vertical)
    //array[0][0]             array[0][1]             array[0][2]
    //                             |                     
    //array[1][0]-------------array[1][1]-------------array[1][2]  
    //                             |
    //array[2][0]             array[2][1]             array[2][2]    

    //                        portanto:

    //        x             array[i-1][j]               x
    //                             |                     
    //array[i][j-1]----------array[i][j]----------array[i][j+1]  
    //                             |
    //        x             array[i+1][j]               x    
    
    //existe essa verificação para os índices nao vazarem da matriz
    var UpRow = i !== 0 ? i-1 : 0; //sem a verificação, o índice [0][0] ficaria [-1][0] no primeiro if*
    var LeftColumn = j !== 0 ? j-1 : 0; 
    var RightColumn = j !== valorMaximoPermitido ? j+1 : valorMaximoPermitido; 
    var BottomRow = i !== valorMaximoPermitido ? i+1 : valorMaximoPermitido; 
    var marca = "b";

    if(array[UpRow][j] == 1 ){//* se achar um 1, marcar acima
        array[UpRow][j] = marca;
    }
    if(array[i][RightColumn] == 1){//se achar um 1, marcar à direita
        array[i][RightColumn] = marca;
    }
    if(array[BottomRow][j] == 1){//se achar um 1, marcar abaixo
        array[BottomRow][j] = marca;
    }
    if(array[i][LeftColumn] == 1){//se achar um 1, marcar à esquerda
        array[i][LeftColumn] = marca;
    }
}

//trocar b's por 1 pra ter a versão final da matriz
for (var i= 0; i<comprimentoDaMatriz; i++){
    for (var j= 0; j<comprimentoDaMatriz; j++){
        if (array[i][j] !== "b"){
            array[i][j] = 0;
        }else{
            array[i][j] = 1;
        }
    }  
}

console.log(array)