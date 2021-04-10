  /*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
  == Eleições 2020 ==*/

  const ler = require("prompt-sync")();
  var idade = ler("Digite sua idade ");
  idade = Number(idade);
  if(idade>=16) console.log ("Pode votar");
  else console.log("Não pode votar");


