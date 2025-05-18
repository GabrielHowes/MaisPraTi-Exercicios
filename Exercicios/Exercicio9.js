// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

const prompt = require('prompt-sync')();

const contagem = Number(prompt('Digite o valor da contagem: '))


for (let i = contagem; i >=0; i--) {
    console.log(i)
}