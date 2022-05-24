/*5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo,
 se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.*/

    var Interv = parseInt(prompt(" Digite o intervalo de numeros! ")); 

    var soma = 0
    for(var i = 1; i<= Interv; i++){
        soma = soma + i;
}
    console.log(soma);
