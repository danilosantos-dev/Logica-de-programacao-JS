//2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).

var qtdeMultilplosDeSete = 0;
var i = 1;
while(i <= 70) {
    if(i % 7 == 0){
        qtdeMultilplosDeSete++;
    }
    i++;
}
console.log("Qtde de múltiplos de 7: " + qtdeMultilplosDeSete);