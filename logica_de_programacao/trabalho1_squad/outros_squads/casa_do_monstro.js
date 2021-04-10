

  // O teatro do monstro permite a entrada de até 5 pessoas;
  // A peça só começa após atingir a lotação máxima;
  // Nesta peça é proibida a entrada de menores de 16 anos;
  // O gerente quer saber quantos são homens e quantos são mulheres antes da peça   começar.

  const ler = require("prompt-sync")();
  var h=0;
  var m=0;

  for(var i = 0; i <4;){
     var idade = ler("Quantos anos você tem? ");
       if (idade>=16){           
           var sexo = ler ("Digite H ou M para informar o sexo: ")
             if(sexo=="H") h++;
             if(sexo=="M") m++;
           console.log("Pode entrar!");           
           i++;

       }
       else console.log("Menores de 16 anos não podem entrar");
  }
  console.log("Acabaram os ingressos!");
  console.log("Homens:",h,"Mulheres:",m);

