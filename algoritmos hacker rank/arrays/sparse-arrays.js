var strings = [
'abcde',
'sdaklfj',
'asdjf',
'na',
'basdn',
'sdaklfj',
'asdjf',
'na',
'asdjf',
'na',
'basdn',
'sdaklfj',
'asdjf'
];

var queries = ['abcde','sdaklfj','asdjf','na','basdn']; // < ver quantas vezes cada valor se repete nas strings
var results = [];

//lógica manual
//pego o primeiro valor do 'queries' e passo pelas 'strings'
//adiciono a quantidade de vezes que ele se repete no results
//repito

for(var i=0; i<queries.length;i++){
    var queryResult = 0;
    for(var j=0; j<strings.length;j++){
        if(queries[i]===strings[j]){
            queryResult++;
        }
    }
    results.push(queryResult);
}

console.log(results);
