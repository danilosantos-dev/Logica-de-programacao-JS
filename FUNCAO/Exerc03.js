//3.	Faça um programa, usando uma função que converta uma temperatura de Celsius para Fahrenheit.

let tempCelsius = parseInt(prompt("Digite a temperatudo em graus celcius: ")); 

console.log(celciusParaFahrenheit(tempCelsius) + " Graus Fahrenheit");

function celciusParaFahrenheit(a){
    return (a * 9/5) + 32;
}