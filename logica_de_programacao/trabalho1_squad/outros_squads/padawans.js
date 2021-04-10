 //Crie um jogo em que você vai ter que escolher entre 3 armas para enfrentar o grande dragão malvado "Progradragão". As armas são uma espada, uma faca e um sapato. Só uma dessas opções que vai garantir a vitória contra o dragão Antes de começar o jogo, o mesmo vai pedir o nome do herói, acrescente o nome do herói nos textos do jogo.
 /*            \                  /
    _________))                ((__________
   /.-------./\\    \    /    //\.--------.\
  //#######//##\\   ))  ((   //##\\########\\
 //#######//###((  ((    ))  ))###\\########\\
((#######((#####\\  \\  //  //#####))########))
 \##' `###\######\\  \)(/  //######/####' `##/
  )'    ``#)'  `##\`->oo<-'/##'  `(#''     `(
          (       ``\`..'/''       )
                     \""(
                      `- )
                      / /
                     ( /\
                     /\| \
                    (  \
                        )
                       /
                      (
                      `
                      */

const ler = require("prompt-sync")();
var tentativa=2;
console.log("\nGRAAAAAARARAAAAAARRRR! EU SOU UM DRAG...quero dizer, PROGRADRAGÃO 🐲! E VOU DESTRUIR TODA PROGRAMAÇÃO DO MUNDO!")
console.log("\n                           DIGITE SEU NOME PARA INICIAR O JOGO\n")
var nome = ler();
console.log("\n\n\n",nome,", precisamos da sua ajuda para derrotar o progradragão! escolha uma das armas rápido!")
console.log("\n\n\n1)👞\n2)🗡️\n3)☕")

while(tentativa>=0){
  var escolha = ler()
  if(escolha==1){
      console.log("Com o sapato em mãos você avança contra o dragão para um duelo mortal!")
      console.log("\n.    nhac\n.      nhac\n.        gulp\n Você foi comido...☠️")
      console.log("\nInacreditavelmente o sapato não funcionou, boa sorte na próxima!")
  }
  if(escolha==2){
      console.log("Com a espada em mãos você avança contra o dragão para um duelo mortal!")
      console.log("\n.    nhac\n.      nhac\n.        gulp\n Você foi comido...☠️")
      console.log("\nMesmo com uma poderosa espada em mãos você foi derrotado, boa sorte na próxima!")
  }
  if(escolha==3){
      console.log("Depois de beber o café você sente o poder dos programadores fluir pelo seu corpo!")
      console.log("\n.    Atribuição!\n.           Decisão!\n.                 Repetição!\n\n O progradragão foi Debugado!...🐞")
      console.log("\nParabéns",nome," você é um MAGO da programação!")
      tentativa=tentativa-2;
      
  }
  if(tentativa>0)
  console.log(tentativa,"restantes");
  if(tentativa>0){
  console.log("\n\n\n1)👞\n2)🗡️\n3)☕")
  }
  else console.log("\n\n                      END GAME");
  tentativa--
}