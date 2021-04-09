/*
Indefinida: Repete pra sempre, enquanto a expressão é verdade

  Promoção da Radio 93;
  Os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da rádio.
*/

const ler = require("prompt-sync")();

//sintaxe
//for (inicio ; condicao; incremento final da iteração) instrução;

//variável de controle
//controla a repetição definida
//finalidade == inicio e fim das iterações

//Limites : inicio e fim

for (var i = 1;i<=5;i++)
{
    let nome = ler("Ouvinte: ");
    console.log("Parabéns ",nome,"ganhou paçoca!");
}

console.log("Promoção encerrada");