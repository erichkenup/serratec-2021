  /*
    Saber dentro da loja
    ** se ** ultrapassar, bloquear o próximo cliente  
  */
  //Repetir sempre que precisar de leitura
  const ler=require("prompt-sync")();

  const LIMITE = 8;

  //Operador/funcionário
  
  var total = ler("Digite quantas pessoas já estão na loja?");

  var autorizado = total < LIMITE;
  //SE VERDADEIRO ENTÃO
  //  VAI SER EXECUTADA;
    
    /*if (true)
      console.log("será executada");
      var nova = "será executada";
      */


   console.log("Autorizar a entrar na loja?", autorizado);

   if (autorizado) console.log("pode deixar esse cliente entrar");
   
   //console.log("é idependente");
  
   //var espera = !autorizado;
   var espera = !(total < LIMTE);
   var espera = total >= LIMITE;

   console.log(espera);

   if (espera) console.log("cliente tem que esperar alguém sair primeiro");
   
   var sequenciais = "normalmente";

   /*
   Negação de operadores
   == nao !=
   != nao ==
   >= nao <=
   <= nao >=
   < nao >=
   > nao <=
   */
  



   
   