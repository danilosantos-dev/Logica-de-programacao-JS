/*9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.*/

var idade=prompt("Digite sua idade: ");

if (idade <=14){
    alert("O voto é proibido!");
}else if (idade >=15 && idade <=17){
    alert("O voto é facultativo!");
}else ("O voto é obrigatorio");