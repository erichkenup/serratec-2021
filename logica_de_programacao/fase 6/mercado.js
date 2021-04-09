  /*
  Funcionário vai entregar uma plaquinha de cartolino amarela para cada cliente que entrar no mercado, para controlar o número de pessoas na loja.
  */

  //função de leitura classica e repetitiva
  // npm install prompt-sync
  const ler = require("prompt-sync")();

  const LIMITE = 3;
  var total = 0;

  var cliente = ler("Qual final do CPF ");
  if (total < LIMITE) total += 1;
  else console.log("Crowded");
  console.log("Cliente na loja agora:",total);

  cliente = ler("Qual final do CPF ");
  if (total < LIMITE) total += 1;
  else console.log("Crowded");
  console.log("Cliente na loja agora:",total);
  
  cliente = ler("Qual final do CPF ");
  if (total < LIMITE) total += 1;
  else console.log("Crowded");
  console.log("Cliente na loja agora:",total);

  cliente = ler("Qual final do CPF ");
  if (total < LIMITE) total += 1;
  else console.log("Crowded");
  console.log("Cliente na loja agora:",total);
