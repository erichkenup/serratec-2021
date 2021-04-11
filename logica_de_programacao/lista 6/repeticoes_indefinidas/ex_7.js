/*
	No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. 
 Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
*/

const ler = require("prompt-sync")();

var poesia = ler("Insira aqui a poesia: ");
console.log(poesia);
var deNovo = true;

while(deNovo){
    var bis = ler("Você quer ler de novo a poesia? s/n ");
    if(bis == "s")
      console.log(poesia);
    else
      deNovo = false;
}