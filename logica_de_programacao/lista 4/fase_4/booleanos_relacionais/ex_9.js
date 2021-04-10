  
  
  /*9-->O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas,  escreve na tela o resultado de cada operação relacional com os números.*/
  
  const ler = require("prompt-sync")();

  
  var A = 0;
  var B = 0;
  A = ler("Digite um inteiro ");
  B = ler("Digite outro inteiro ");
 
  var R = A>B;
  console.log("A>B = ",R);
  var R = A<B;
  console.log("A<B = ",R);
  var R = A==B;
  console.log("A==B = ",R);
  var R = A!=B;
  console.log("A!=B = ",R);
  var R = A>=B;
  console.log("A>=B = ",R);
  var R = A<=B;
  console.log("A<=B = ",R);




