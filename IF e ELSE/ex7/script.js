/*7) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem decrescente*/

var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número"));
var num3 = parseInt(prompt("Digite o terceiro número"));

if (num1 == num2 && num1 == num3) {
    alert("Os três números são iguais!")
} else if (num1 > num2 && num1 > num3 && num2 > num3) {
    alert(num1 + ", " + num2 + ", " + num3)
} else if (num1 > num2 && num1 > num3 && num3 > num2) {
    alert(num1 + ", " + num3 + ", " + num2)
} else if (num2 > num1 && num2 > num3 && num1 > num3) {
    alert(num2 + ", " + num1 + ", " + num3)
} else if (num2 > num1 && num2 > num3 && num3 > num1) {
    alert(num2 + ", " + num3 + ", " + num1)
} else if (num3 > num1 && num3 > num2 && num1 > num2) {
    alert(num3 + ", " + num1 + ", " + num2)
} else if (num3 > num1 && num3 > num2 && num2 > num1) {
    alert(num3 + ", " + num2 + ", " + num1)
} else if (num1 == num2 && num1 > num3) {
    alert(num1 + ", " + num2 + ", " + num3)
} else if (num1 == num2 && num1 < num3) {
    alert(num3 + ", " + num2 + ", " + num1)
} else if (num1 == num3 && num1 > num2) {
    alert(num3 + ", " + num1 + ", " + num2)
} else if (num1 == num3 && num1 < num2) {
    alert(num2 + ", " + num1 + ", " + num3)
} else if (num2 == num3 && num2 > num1) {
    alert(num3 + ", " + num2 + ", " + num1)
} else if (num2 == num3 && num2 < num1) {
    alert(num1 + ", " + num2 + ", " + num3)
}