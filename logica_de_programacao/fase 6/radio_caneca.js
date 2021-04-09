


const ler = require("prompt-sync")();
var count = 0;

for(var y=0;y<3;){
    
    count++
    console.log("Você é o competidor n°",count," tente responder corretametne");  
     for(var x=0;x<2;x++){
          var pk = ler ("Qual o meu pokémon favorito ")
          if(pk=="alakazam"){
            console.log("parabéns, você ganhou uma caneca!")
            x=x+2
            y++
          }
          else{
            if(x==0)console.log("Errou, tente outra vez.");
            else console.log("Acabaram as tentativas");
       }
  }   
}
console.log("Acabaram as canecas, desafio encerrado!");




  
