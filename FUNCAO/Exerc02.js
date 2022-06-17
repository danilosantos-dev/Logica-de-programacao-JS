//2.	Faça um programa, usando uma função, para calcular a porcentagem de um número. 

let porcentagem = parseInt(prompt("Digite a porcentagem: "));
let numero = parseInt(prompt("Digite o numero que deseja saber a porcentagem: "));

console.log (porcentagem + "%" + " de " + numero + " é " + descobrePorcentagem(porcentagem,numero));
function descobrePorcentagem(a,b){
    return a * b/100;
}
