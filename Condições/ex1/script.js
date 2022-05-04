/*O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira 
prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo 
para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 
7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor 
do que 5 mostre REPROVADO. 3. Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.*/


var nome = prompt("Digite seu nome");

var nota1 = parseInt(prompt("Digite sua primeira nota: "));
var nota2 = parseInt(prompt("Digite sua segunda nota: "));
var nota3 = parseInt(prompt("Digite sua terceira nota: "));

var peso1 = 4 
var peso2 = 3
var peso3 = 3

var mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);


if(mediaPonderada >= 7){
    alert("Você foi aprovado! ");
}else if(mediaPonderada <= 7 && mediaPonderada >= 5){
    alert("Você está de recuperação! ");
}else alert ("você foi reprovado!");

alert ( nome + " sua Media é: " + mediaPonderada );





