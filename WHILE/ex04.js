//4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;

var inicio = parseInt(prompt("Digite o ínicio do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));

var somaMultiplosOnze = 0;

var i = inicio;

while(i <= fim) {
    if(i % 11 == 0) {
        somaMultiplosOnze += i;
    }
    i++;
}
console.log("Soma dos multiplos de 11: " + somaMultiplosOnze);

