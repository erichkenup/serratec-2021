

  const ler = require("prompt-sync")();

  var letra =ler("Digite uma letra maiúscula: ");
  var mensagem;
  if(letra==("A"||"B"||"C"||"D"||"E"||"F"||"G")){
      switch(letra){
  case "A": mensagem="Lá";break;
  case "B": mensagem="Si";break;
  case "C": mensagem="Dó";break;
  case "D": mensagem="Ré";break;
  case "E": mensagem="Mi";break;
  case "F": mensagem="Fá";break;
  case "G": mensagem="Sol";break;
      }
      console.log("A nota musical é:",mensagem);
  }
  else console.log("Não é uma nota musical")