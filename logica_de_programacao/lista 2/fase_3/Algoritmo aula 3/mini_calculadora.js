  const ler = require("prompt-sync")();

  var n1=ler("Digite o primeiro número: ");
  var n2=ler("Digite o segundo número: ");
  console.log("Soma:",parseFloat(n1)+parseFloat(n2),"\nSubtração:",n1-n2,"\nMultiplicação:",n1*n2,"\nDivisão:",n1/n2);
  //ou var n1 = parseFloat(prompt("digite um numero"))