// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

let escolha = prompt('O que temos pra hoje? (sexta a noite) ').toLowerCase;

switch(escolha) {
    case 'estudar':
        console.log('Vamos estudar sexta a noite >:(') ;
        break;
    case 'filme':
        console.log('Vamos ver filme sexta a noite :)');
        break;    
    case 'jogar':
        console.log('VAMOS JOGAR SEXTA A NOITE :))))');
        break;
}   