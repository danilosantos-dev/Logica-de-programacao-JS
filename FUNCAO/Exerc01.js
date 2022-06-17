//	Faça um programa, usando funções, que realize todas as operações básicas: soma, subtração, multiplicação, divisão.

let operacao = parseInt(prompt("Qual operação deseja realizar: \n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão"));

let num1 = parseInt(prompt("Digite o primeiro numero da operação: "));
let num2 = parseInt(prompt("Digite o segundo numero da operação: "));


if (operacao === 1){
    console.log(soma (num1,num2));
}if (operacao === 2){
    console.log(subtracao(num1,num2));
}if (operacao === 3){
    console.log(multiplica(num1,num2));
}if(operacao === 4){
    console.log(divide(num1,num2));
}if(operacao >= 5){
    console.log("operação invalida");
}
function soma (x,y){
    return x + y;
}
function subtracao (x,y){
    return x - y;
}
function multiplica (x,y){
    return x * y;
}
function divide (x,y){
    return x/y;
}