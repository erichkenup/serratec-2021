/*
Indefinida: Repete pra sempre, enquanto a expressão é verdade

  Promoção da Radio 93;
  Os primeiros 5 ouvintes que ligarem ganham um boné e camiseta da rádio.
*/

const ler = require("prompt-sync")();

var count=0;
var pessoa="oi";

while (count<5){
    count++;

    console.log ("Olá, você é a",count,"° pessoa a ligar");
    pessoa = ler("Qual o seu nome?");

    console.log("Parabéns,",pessoa,"você ganhou um boné");
}
console.log("Desculpe, já entregamos 5 prêmios.");