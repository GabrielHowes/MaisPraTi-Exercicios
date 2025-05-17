const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Digite o ${i}º número: `));
  soma += num;
}

console.log(`A soma total dos 5 números é: ${soma}`);