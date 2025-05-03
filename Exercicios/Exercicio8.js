const prompt = require('prompt-sync')();

const valor1 = Number(prompt('Digite o valor 1: '))
const valor2 = Number(prompt('Digite o valor 2: '))

if (valor1 === valor2) {
    console.log('Não pode ser valores iguais.')
} else if (valor1 < valor2) {
    console.log('Valores em ordem crescente: ', valor1, valor2)
} else {
    console.log('Valores em ordem crescente: ', valor2, valor1)
}