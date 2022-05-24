/*4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;*/

var inicio = parseInt(prompt("Digite o inicio do intervalo: "));
var Interv = parseInt(prompt("Digite o intervalo de numeros: "));

var somaMultiplos = 0;

for(var i = inicio; i<= Interv; i++){
    if(i % 11 == 0){
        somaMultiplos = somaMultiplos + i;
    }
}
console.log("a soma dos multiplos e:" + somaMultiplos);