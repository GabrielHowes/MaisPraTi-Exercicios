const prompt = require('prompt-sync')();

const contagem = Number(prompt('Digite o valor da contagem: '))


for (let i = contagem; i >=0; i--) {
    console.log(i)
}