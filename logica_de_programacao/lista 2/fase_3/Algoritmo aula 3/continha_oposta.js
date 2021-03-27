

  const ler = require("prompt-sync")();
  
  //atividede
  //14. a "calculadora oposta" lê um número mostra seu valor negativo.
  
  let numero = ler("Digite um valor positivo: ");
  
  numero = -numero;
  
  console.log("O valor negativo é:", numero);