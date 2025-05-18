// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

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