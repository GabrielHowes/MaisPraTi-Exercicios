const prompt = require('prompt-sync')();

let nota = Number(prompt('Qual a sua nota? '));


if (nota < 0 || nota > 10 || isNaN (nota)){
    console.log('Nota inválida, tente uma nota de 0 a 10.');
} else if (nota <=5) {
    console.log('Reprovado.');
} else if (nota === 6) {
    console.log('Recuperação.');
} else {
    console.log('Aprovado.');
}
