// O custo ao consumidor de um carro novo, é a soma do custo de fábrica com a percentagem do revendedor e com o custo dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do revendedor seja de 25% do custo de fábrica e que os impostos custam 45 % do custo de fábrica, faça um algoritmo que leia o valor de custo de fábrica e determine o preço final do automóvel (custo ao consumidor).//

var fabrica=parseInt(prompt("Digite o custo de fabrica do automovel: "));

var impostos=(fabrica * 45/100);
var vendedor=( fabrica * 25/100);
var final=(impostos + vendedor + fabrica);


alert("O preco do automovel somado aos impostos é: " + final);


