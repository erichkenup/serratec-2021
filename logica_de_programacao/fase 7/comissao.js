/*  Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 20.76  */ 

const ler = require("prompt-sync")();

console.log("== Comissões ==");

//entrada
var vendas = ler("Valor total das suas vendas no mês: ");

//processamento
let comissao = 0.0;
let adicional = 0.0;

//saidas
console.log("Sua comissao: ",comissao);
console.log("Valor adicional: ",adicional);
