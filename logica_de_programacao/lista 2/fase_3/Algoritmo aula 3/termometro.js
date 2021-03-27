

  const prompt = require("prompt-sync")();
  
  
  var temp_fahrenheit;
  var temp_celsius = prompt("Digite a têmperatura em celsius: ");
  
  temp_fahrenheit = temp_celsius*9/5+32
  console.log("A temperatura em fahrenheit é: ", temp_fahrenheit);



