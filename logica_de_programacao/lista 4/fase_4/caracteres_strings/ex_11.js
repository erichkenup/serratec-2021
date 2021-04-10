  
  
  /*11 -> O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.*/

  //PROGRAMA EDUCADO
  const ler = require("prompt-sync")();
  nome = ler("Digite seu nome ");
  apelido = ler("Como você gostaria de ser chamado ");
  console.log("Saudações",apelido);
