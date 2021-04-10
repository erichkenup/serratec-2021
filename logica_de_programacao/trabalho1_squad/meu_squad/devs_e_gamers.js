  
  /*CINEMA:
  
  1. Um cinema faz reservas de 5 ingressos para uma sala, sendo 2 para meia entrada, para a reserva, basta informar o nome e se é meia ou não, é permitido apenas uma reserva por nome.
  2. Após os 5 reservados, o cliente pode retirar se ingresso informando o seu nome, o ingresso irá informar seu número, nome de quem reservou e se é meia ou não.*/

  const ler = require("prompt-sync")();

  var meia=2;
  var inteira=0;
  var j=0;

  for(i=0;i<5;i++){
      if(i==0){
        var nome0 = ler ("Olá, qual o seu nome? ");
        
        var pergunta0 = ler("A reserva é para meia entrada? Digite meia ou inteira ");
            if(meia>0){
                if(pergunta0=="meia"){
                meia=meia-1;
                }

            }
            else{
                console.log("Os ingressos meia já estão esgotados, será registrada como inteira")
                pergunta0 = "inteira";
            }
        var nmro0 = i        
        
      } 
      if(i==1){
        var nome1 = ler ("Olá, qual o seu nome? ");
        
        var pergunta1 = ler("A reserva é para meia entrada? Digite meia ou inteira ");
            if(meia>0){
                if(pergunta1=="meia"){
                meia=meia-1;
                }

            }
            else{
                console.log("Os ingressos meia já estão esgotados, será registrada como inteira")
                pergunta3 = inteira;
            }
        var nmro1 = i        
        
      }
    
      if(i==2){
        var nome2 = ler ("Olá, qual o seu nome? ");
        
        var pergunta2 = ler("A reserva é para meia entrada? Digite meia ou inteira ");
            if(meia>0){
                if(pergunta2=="meia"){
                meia=meia-1;
                }

            }
            else{
                console.log("Os ingressos meia já estão esgotados, será registrada como inteira")
                pergunta2 = "inteira";
            }
        var nmro2 = i        
        
      }  
      if(i==3){
        var nome3 = ler ("Olá, qual o seu nome? ");
        
        var pergunta3 = ler("A reserva é para meia entrada? Digite meia ou inteira ");
            if(meia>0){
                if(pergunta3=="meia"){
                meia=meia-1;
                }

            }
            else{
                console.log("Os ingressos meia já estão esgotados, será registrada como inteira")
                pergunta3 = "inteira";
            }
        var nmro3 = i        
        
      }
      if(i==4){
        var nome4 = ler ("Olá, qual o seu nome? ");
        
        var pergunta4 = ler("A reserva é para meia entrada? Digite meia ou inteira ");
            if(meia>0){
                if(pergunta4=="meia"){
                meia=meia-1;
                }

            }
            else{
                console.log("Os ingressos meia já estão esgotados, será registrada como inteira")
                pergunta4 = "inteira";
            }
        var nmro4 = i        
        
      }
  }
  
  while(j<5){
    var retirar = ler ("Digite seu nome para retirar: ")
    if(retirar == nome0){
        console.log("Seu ingresso é:",nome0,",",pergunta0,",",nmro0+1);
        j++

    }
    if(retirar == nome1){
        console.log("Seu ingresso é:",nome1,",",pergunta1,",",nmro1+1);
        j++
    }
    if(retirar == nome2){
      console.log("Seu ingresso é:",nome2,",",pergunta2,",",nmro2+1);
      j++
    }
    if(retirar == nome3){
        console.log("Seu ingresso é:",nome3,",",pergunta3,",",nmro3+1);
        j++
    }
    if(retirar == nome4){
        console.log("Seu ingresso é:",nome4,",",pergunta4,",",nmro4+1);
        j++
    }
}
  

