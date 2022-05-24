//Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.//

var preco=parseFloat(prompt("Digite a cotação do dolar atual: "));
var quant=parseFloat(prompt("Valor em dollar com você: "));

var conver=(preco * quant);

alert("Você tem " + conver + "R$");