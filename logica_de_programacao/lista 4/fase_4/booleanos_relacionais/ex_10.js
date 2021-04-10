/*10---> Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.*/
var x= 6.0; 
var y= 2; 
var z= 4.000;
var a= 8; 
var b= 7.5; 
var c= 12;

var R = x - y > a
console.log("x - y > a",R )
var R =x - y * a > c % y;
console.log("x - y * a > c % y",R )
var R = y !=c
console.log("y !=c",R )
var R = x * y != c
console.log("x * y != c",R )
var R = c % y <= y % c
console.log("c % y <= y % c",R )
var R = a < b
console.log("a < b",R )
var R = z / a + x * y - 5 >= b
console.log("z / a + x * y - 5 >= b",R )
var R = c * z + 2 == a * x + y
console.log("c * z + 2 = a * x + y",R )
var R = c == z + b
console.log("c = z + b",R )
var R =y * 2 != 7 - b
console.log("y * 2 != 7 - b",R )

