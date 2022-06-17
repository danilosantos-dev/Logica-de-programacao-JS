/*3) Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.*/

var num = parseInt(prompt("Digite um numero: "));

var parOuimpar = (num % 2);

if(parOuimpar == 0){
    alert("O numero " + num + " é par");
}else alert("O numero é impar!")