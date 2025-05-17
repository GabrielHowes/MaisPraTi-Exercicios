const prompt = require('prompt-sync')();

const numeroTabuada = Number(prompt('Digite o valor que deseja ver a tabuada: '))

for (let i = 0; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`)
}