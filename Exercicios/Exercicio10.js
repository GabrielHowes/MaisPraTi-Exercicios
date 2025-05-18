// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

const repeticao = Number(prompt('Digite o valor da repetição: '))

for (let i = 0; i < 10; i++) {
    console.log(repeticao)
}