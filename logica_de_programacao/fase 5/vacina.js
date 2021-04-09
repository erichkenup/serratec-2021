  /*
  vacina
  perguntar a idade, sendo 67 anos, pode vacianr hoje.
  sendo inferior, avisar que volta semana que vem.
  sendo superior, pq não vacinou ainda?
  */

  const ler=require("prompt-sync")();

  var idade = ler("Qual sua idade?");

  if(idade>=67) console.log("Pq não vacinou ainda?");
  else console.log("Volte semna que vem.")