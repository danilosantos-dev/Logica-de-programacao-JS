/*2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).*/
var contaNumeros = 0
var intervalo = 70

for(var i = 1;i<= intervalo; i++ ){
    if(i % 7 == 0 ){
         contaNumeros++ ;
    }
}
console.log("Quantidade de multiplos de 7 é: " + contaNumeros);