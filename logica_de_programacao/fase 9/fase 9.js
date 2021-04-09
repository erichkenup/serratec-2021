  /* 
  O programa otimista não consegue ver frases negativas. Toda vez que um texto possui a palavra "não", ele substitui por "sim"!
  */

  const FRASE = "Eu não serei um bom programador não não."

  function otimista (frase){


    let nova = frase.replace("não", "sim")
    

    var pos = nova.indexOf("não")
    
    if (pos >= 0)
    //nova = otimista(nova);
    return otimista (nova);

    return nova;

  }

  let otimismo = otimista(FRASE);

  console.log("Como meio vazio: " + FRASE);
  console.log("Como meio cheio: " + otimismo);

  Math.abs(-2)