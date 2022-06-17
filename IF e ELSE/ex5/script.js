/*5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.*/


var num1 = parseInt(prompt("Digite o primeiro valor: "));
var num2 = parseInt(prompt("Digite o segundo valor: "));
var num3 = parseInt(prompt("Digite o terceiro valor: "));

if ( num1 > num2 ){
    alert("O numero " + num1 + " é o maior valor.");
}else if( num2 > num1 ){
    alert ("O numero " + num2 + " é o maior valor");
}else if(num3 > num1 ){
    alert("O numero " + num3 + " é o maior valor.");
}else if(num1 > num3 ){
    alert ("O numero: " + num1 + " é o maior ");
}else if(num3 > num2){
    alert("O numero " +num3 + " é o maior valor ");
}else if (num2 > num3){
    alert("O numero " + num2 + " é o maior valor");
}else if (num1 == num2 && num2 == num3){
    alert("Os numeros são iguais ");
}

