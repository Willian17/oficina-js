const idade = +prompt("Qual sua idade?");

// Estrutura condicional (if-else)
if (idade >= 18) {
  alert("Pode dirigir.");
} else {
  alert("Não pode dirigir.");
}

// Estrutura condicional (ternário)
idade >= 18 ? alert("Pode dirigir.") : alert("Não pode dirigir.");

// Estrutura de repetição (for)
for (let i = 0; i < 5; i++) {
  alert("Iteração " + i);
}

// Estrutura de repetição (while)
let contador = 0;
while (contador < 3) {
  alert("Contagem: " + contador);
  contador++;
}
