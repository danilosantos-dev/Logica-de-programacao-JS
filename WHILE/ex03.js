//3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.

var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var qtdePares = 0;
var qtdeImpares = 0;

var i = inicio;
while(i <= fim) {
    if(i % 2 == 0) {
        qtdePares++;
    } else {
        qtdeImpares++;
    }
    i++;
}

console.log("Qtde de pares: " + qtdePares);
console.log("Qtde de ímpares: " + qtdeImpares);