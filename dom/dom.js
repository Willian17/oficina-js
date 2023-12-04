window.onload = () => {
  const span = document.getElementById("elemento");
  //span.innerHTML = "Tarefa: ";

  const ul = document.getElementById("lista");
  const tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

  const lis = tarefas.map((tarefa) => {
    const li = document.createElement("li");
    li.innerHTML = tarefa;
    return li;
  });

  ul.append(...lis);

  const botao = document.getElementById("botao");
  botao.addEventListener("click", adicionar);

  botao.addEventListener("dblclick", () => {
    console.log("Duplo clique");
  });
  botao.addEventListener("mouseenter", () => {
    console.log("Mouse dentro");
  });
  botao.addEventListener("mouseleave", () => {
    console.log("Mouse fora");
  });
};

function adicionar() {
  const input = document.getElementById("input");
  const valor = input.value;

  const li = document.createElement("li");
  li.innerHTML = valor;
  document.getElementById("lista").append(li);
  input.value = "";
}
