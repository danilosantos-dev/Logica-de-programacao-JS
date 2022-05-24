// Faça um algoritmo que leia uma temperatura em Graus Fahrenheits e mostre a temperatura em Graus Celsius. Para isso pesquise a fórmula na internet.//

var Fah= parseFloat(prompt("Digite a temperatura atual em Fahrenheits: "));

var conver= (Fah - 32) * 5/9;

alert("A temperatura atual em gruas celcius é: " + conver + "°graus");