  /*7>O programa “Compromissos” gerencia a sua agenda do mês. Você pode digitar um compromisso, informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.
  */
 const ler = require("prompt-sync")();

 var dia = [];
 var evento = [];
 var dia1 =0
 var evento1 = "";
 var n = "s";
 while(n=="s"){
    dia1 = ler("Digite o dia do compromisso: ")
    dia[dia1]=dia1
    evento1 = ler("Digite o compromisso: ")
    evento[dia1]=evento1
    n = ler ("Quer continuar? s/n ")
 }
 n = ler("Quer consultar compromisso do dia? s/n: ")
 while(n=="s"){
    dia1 = ler ("Digite o dia do compromisso: ")
    console.log("Compromisso: ", evento[dia1]);
    n = ler("Quer continuar? s/n: ");
 }
 console.log("Fim da busca")




