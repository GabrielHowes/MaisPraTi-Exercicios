// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')();

let idade = Number(prompt('Qual é sua idade? '));

if (idade <= 11) {
    console.log('Você é criança.');
} else if (idade <= 17) {
    console.log('Você é adolescente.');
} else if (idade <=60) {
    console.log('Você é adulto.');
} else {
    console.log('Você é idoso.');
}