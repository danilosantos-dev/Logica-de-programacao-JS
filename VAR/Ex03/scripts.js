//Um cliente de um banco tem um saldo positivo de R$ 500,00. Fazer um algoritmo que leia um cheque que entrou e calcule o saldo, mostrando (escrevendo) o novo saldo na tela.//

var cheque=parseFloat(prompt("Digite o valor que deseja depositar: "));

var saldo=(500 + cheque);

alert("Seu saldo atual e: " + saldo);