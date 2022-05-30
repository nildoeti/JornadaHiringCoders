// exemplo 1
function funcaoOrdema(x, y) {
    return x - y; // ordena valores em ordem crescente
}

let arr = [9, -1, 5, -3, 60, 33, 90, 1, 34];

arr.sort(funcaoOrdema);
console.log(arr);


// exemplo 2
let myNumbers = [ 2, 0, 6, 3, -12, 8, -4, 90, 32, 900];

let numberOrder = myNumbers.sort( function (x, y) {
    return x > y;
});

console.log(numberOrder);
