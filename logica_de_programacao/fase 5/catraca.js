  const ler=require("prompt-sync")();

  console.log("Fila da balada");
  var pessoa = ler ("Como você se identifica: ");

  var mulher = pessoa == "Feminino" || pessoa == "f";
  //var homem = !mulher

  if(mulher) console.log ("Entrada gratuita");
  else {
      console.log ("Duas abdominais pra entrar");
      console.log ("Deus te ama!");
  }
  
  