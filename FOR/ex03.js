/*3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.*/

var Inicio = parseInt(prompt("Digite o inicio! "));
var intervalo = parseInt(prompt("Digite o fim do intervalo! "));

var numPar = 0
var numImpar = 0

for(var i = Inicio; i<= intervalo; i++ ){
    if (i % 2 == 0){
         numPar++ ;
    }else{
         numImpar++ ; 
    }
}
    console.log(numPar +  " é par \n" + numImpar + " é impar" );