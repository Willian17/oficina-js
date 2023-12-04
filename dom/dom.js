window.onload = async () => {
  const span = document.getElementById("elemento");
  //span.innerHTML = "Tarefa: ";

  const ul = document.getElementById("lista");
  const tarefas = await getTarefas();

  const lis = tarefas.map((tarefa) => {
    const li = document.createElement("li");
    li.innerHTML = `${tarefa.id} - ${tarefa.name}`;
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

async function getTarefas() {
  const response = await fetch("http://localhost:8080/tarefas");
  const tarefas = await response.json();
  return tarefas;
}

function atualizarTerefas(tarefas) {
  const lis = tarefas.map((tarefa) => {
    const li = document.createElement("li");
    li.innerHTML = `${tarefa.id} - ${tarefa.name}`;
    return li;
  });

  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  ul.append(...lis);
}

function adicionarTarefa(tarefa) {
  fetch("http://localhost:8080/tarefas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: tarefa }),
  })
    .then((response) => response.json())
    .then((data) => atualizarTerefas(data));
}

function adicionar() {
  const input = document.getElementById("input");
  const valor = input.value;

  adicionarTarefa(valor);

  input.value = "";
}
