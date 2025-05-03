const prompt = require('prompt-sync')();

let peso = Number(prompt('Digite seu peso '));
let altura = Number(prompt('Digite sua altura (metros) '));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log('Valores inválidos. Digite altura e peso válidos.');
} else {
    let imc = peso / (altura * altura);
    console.log('Seu IMC é: ' + imc.toFixed(2));


if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc < 24.9) {
    console.log('Peso normla.');
} else if (imc < 29.9) {
    console.log('Acima do peso.');
} else {
    console.log('Você está Obeso.')
}

}