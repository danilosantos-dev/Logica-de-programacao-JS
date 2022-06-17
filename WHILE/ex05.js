//5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var fim = parseInt(prompt("Digite o fim do intervalo"));
var soma = 0;
var i = 1;

while(i <= fim) {
    soma += i;
    i++;
}

console.log("Soma dos números: " + soma);