  

  /*15->O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.*/

  const ler = require("prompt-sync")();
  var tara = 465;
  var peso = ler("Digite o preço do quilo: ");
  var gramas = ler("Digite as gramas da refeição: ");
  gramas=gramas
  valor = gramas*peso/1000

  console.log("Restaurante HotPepper, tara",tara,"g, 100g",peso/10,"R$, valor total",valor);

