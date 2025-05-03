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