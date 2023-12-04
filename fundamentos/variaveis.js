// Declarando variáveis
let nome = "João";
const idade = 25;
var saldo = 1000;

nome = prompt("Qual seu nome?");

// Concatenação de strings
const saudacao = "Olá, " + nome + "!";
const saudacao2 = `Olá, ${nome}!`;
alert(saudacao);
alert(saudacao2);

const a = +prompt("Primeiro número:");
const b = parseInt(prompt("Segundo número:"));

// Operadores
const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const restoDivisao = a % b; // Resto da divisão

alert("Soma: " + soma);
alert("Subtração: " + subtracao);
alert("Multiplicação: " + multiplicacao);
alert("Divisão: " + divisao);
alert("Resto da divisão: " + restoDivisao);
