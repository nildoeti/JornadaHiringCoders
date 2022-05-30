/*
    Algoritmo de ordenação com:
    Insert sort, selection sort, quick sort, etc.
    Fonte: https://medium.com/tableless/algoritmos-de-ordena%C3%A7%C3%A3o-e-o-seu-javascript-65d50723ae57
*/ 


// sort
// Esse método classifica os valores como string e os ordena em ordem ascendente. 
// Ou seja, se seu array for de valores numéricos ele não terá a ordenação que 
// você deseja. Pois o valor será interpretado como uma string e aí sim ordenado.
let ar = [40, 10, 101, 20];
ar.sort();
console.log(ar); // [ 10, 101, 20, 40 ]

//Solução
// passe uma função de comparação como parâmetro
ar.sort( function(a, b) {
    return a - b;
});

console.log(ar); // [ 10, 20, 40, 101 ]
/*
    Observe que isso também é útil para ordenar um array de objetos. Ordenando 
    com base em um valor numérico de um determinado atributo. (exe.: idade, peso).
*/

