



  const ler = require("prompt-sync")();

  //repita
  let senhaCerta;

  do {
    let alo = ler("Lingando pra você: ");
    senhaCerta = alo == "93show";
  } while(!senhaCerta);
  
  console.log("Parabéns, você ganhou!");