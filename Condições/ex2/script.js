/*2) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.*/

alert ("Informe o ano que deseja saber se é bissexto");
var ano = prompt("Digite o ano: ");

var anoBissexto = (ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0));

if (anoBissexto){
    alert ("O ano " + ano + " é bissexto");
}else  alert("O ano não é bissexto ");