  //tabelaverdade;

  //&& e and
  
  //Primeiro Valor | Segundo valor | Resultado calculado

  //tabela verdade do E
  /*

    P  |   Q  | "e"
  _____+______+_____
  true | true | true
  true | false| false
  false| true | false
  false| false| false
  */
  //para que a expressão seja verdadeira, AMBOS são verdade
  /*
  OU || or 
  //para que a expressão seja verdade, QUALQUER um sendo verdade

  P    |   Q  | "ou"
  _____+______+_____
  true | true | true
  true | false| true
  false| true | true
  false| false| false
  
  */

  //Turma está feliz
  /*
  var A, B;

  //A = "Matheus está feliz";
  A = "feliz";
  //B = "Jessica está também feliz";
  B = "feliz";

  //AMBOS

  var turma;
  //Relacional
  var af = (A == "feliz"); 
  var bf = (B == "feliz"); 


  console.log("a feliz?", af);
  console.log("b feliz?", bf);

  //&& é o mesmo que AMBOS, o da esquerda e o da direita, binário
  turma = (af&&bf);
  console.log("A turma toda está feliz?", turma);

  //finge que Alice não tá feliz
  A = "tá não";

  af = A == "feliz";
  bf = B == "feliz";
  turma = af&&bf;
  console.log("a turma toda contando alice está feliz?", turma);
  //Ambas as variáveis contém o valor true? não neh, uma é false
*/
/*
var feliz;

//saboreando

//André
feliz = true;
console.log("valor na var feliz", feliz);

var resultado = ! feliz;
console.log("André, fala a verdade", resultado);

/*
  P  | não
-----+----
true | false
false|true
-----+-----
//não te desmente
//A tabela verdade é do Operador
// como o operador se comporta em relação aos valores lógicos
*/

//OU

var A, B;

A = "feliz";
B = "não";
C = "feliz";

var af = A == "feliz";
var bf = B == "feliz";
var cf = C == "feliz";

var resultado = af || bf || cf;
console.log("Turma tá feliz?", resultado);

resultado = A == "feliz" || B == "feliz"; //não é apropriado fazer na mesma linha

A = "sim";
B = "não";

resultado = A == "sim" && B == "sim";

resultado = A == "sim" || A == "feliz" && B == "sim";