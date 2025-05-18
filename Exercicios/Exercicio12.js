// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')();

const numeroTabuada = Number(prompt('Digite o valor que deseja ver a tabuada: '))

for (let i = 0; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`)
}