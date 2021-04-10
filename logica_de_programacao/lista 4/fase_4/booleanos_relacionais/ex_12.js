  /*12 -> Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
*/
const ler = require("prompt-sync")();

var n1 = ler("Jogador 1 digite um número: ");
var n2 = ler("Jogador 2 digite um número: ");
n1 = Number(n1);
n2 = Number(n2);

console.log("Jogador 1 venceu? ",n1>n2 );
console.log("Jogador 2 venceu? ",n2>n1 );
console.log("Empate? ",n1==n2 );
