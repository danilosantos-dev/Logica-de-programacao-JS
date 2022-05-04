/*4) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".*/

var a = parseInt(prompt("Digite o primeiro valor: "));
var b = parseInt(prompt("Digite o segundo valor: "));

var multiplo = (a % b)     


if(multiplo == 0){
    alert (" Os numeros informados são multiplos ");
}else alert ("Os numeros não são multiplos");
