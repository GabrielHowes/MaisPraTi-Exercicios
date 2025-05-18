// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade  = 0;

while (true) {

  const numero = Number(prompt('Digite um numero decimal (0 para finalizar): '));


  if (numero === 0) break;


  if (!Number.isNaN(numero)) {
    soma += numero;
    quantidade  += 1;
  }
}

if (quantidade > 0) {
  const media = soma / quantidade;
  console.log(`Média aritmética: ${media.toFixed(2)}`);
} else {
  console.log('Nenhum número válido foi digitado.');
}
