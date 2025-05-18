// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

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
