//.	Faça um programa, usando uma função o que retorne um valor booleano (true ou false) informando se o número enviado como parâmetro é ímpar.

let numero = parseInt(prompt("Digite o numero: ")); 

console.log (eimpar(numero));

function eimpar(num){
    return num % 2 !== 0;
}