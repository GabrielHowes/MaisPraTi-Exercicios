const prompt = require('prompt-sync')();

const macasCompradas = Number(prompt('Quantas maças você irá levar? '))

let precoMaca;

if (macasCompradas < 12) {
    precoMaca = 0.30;
} else {
    precoMaca = 0.25;
}

let valorTotal = macasCompradas * precoMaca;

console.log('O valor total da compra de maçãs foi ' + valorTotal.toFixed(2));