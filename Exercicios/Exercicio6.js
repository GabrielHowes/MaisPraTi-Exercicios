const prompt = require('prompt-sync')();

let ladoA = Number(prompt('Digite o lado A do triangulo '));
let ladoB = Number(prompt('Digite o lado B do triangulo '));
let ladoC = Number(prompt('Digite o lado C do triangulo '));

if (ladoA <=0 || ladoB <=0 || ladoC <=0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    console.log('Lados inválidos, por favor insira números válidos.')
} else if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log('Isso é um triangulo =)');

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo Equilátero.');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Triângulo Isósceles.');
    } else {
        console.log('Triângulo Escaleno.');
    } 
} else {
        console.log('Isso não é um triangulo.')
}
