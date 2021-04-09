   /*
  Funcionário vai entregar uma plaquinha de cartolino amarela para cada cliente que entrar no mercado, para controlar o número de pessoas na loja.
  */

  //função de leitura classica e repetitiva
  // npm install prompt-sync
 const ler = require("prompt-sync")();

  const LIMITE = 3;
  var cliente

  var total = 0;
  /*
  cliente = ler("Qual final do CPF ");

  while(total < LIMITE)
  {
    cliente = ler("Qual final do CPF ");
    total++;
    console.log("Cliente na loja agora:",total);
  }
  console.log("Loja lotada");
  */

  do {
    cliente = ler("Qual final do CPF");
    total++;
    console.log("cliente na loja agora: ",total);
  } while (total < LIMITE);

  console.log("loja lotada");