function soma(a, b) {
  return a + b;
}

const subtracao = (a, b) => {
  return a - b;
};

alert("Soma: " + soma(10, 5));
alert("Subtracao: " + subtracao(10, 5));

const notas = [7, 8, 9, 10];

const notasPeso = notas.map((nota) => nota * 2);
alert(notasPeso);

const total = notasPeso.reduce((soma, nota) => soma + nota, 0);
alert(total);

const acimaMedia = notasPeso.filter((nota) => nota > 8);
alert(acimaMedia);
