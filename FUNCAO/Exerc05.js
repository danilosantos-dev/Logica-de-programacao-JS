//5.	Faça um programa, usando uma função que calcule a raiz quadrada de um número.

let numeroRaiz = parseInt(prompt("Digite o numero que deseja saber a raiz quadrada: "));

console.log(calculaRaiz(numeroRaiz));

function calculaRaiz (num){
    return  Math.sqrt(num);
}
// neste caso, usei uma classe do proprio javaScript para calcular a raiz.