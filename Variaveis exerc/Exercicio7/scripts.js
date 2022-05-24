// Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.//

var nome=prompt("Diga seu nome: ");
var salário=parseFloat(prompt("Digite seu salario fixo: "));
var vendas=parseFloat(prompt("Seu total de vendas realizado em dinheiro: "));

var comissão=(vendas * 15/100);
var salariofinal=(salário + comissão);

alert("Nome: " + nome + "\nsalario fixo: " + salário + "\nSalario + comissão: " + salariofinal);
