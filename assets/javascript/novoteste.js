// Declaração das variáveis
let gabarito = ['B', 'D', 'A', 'A', 'E', 'C', 'E', 'A', 'B', 'B'];
let alunos = [];
let continuar = true;

// Função para calcular a nota de um aluno
function calcularNota(respostas) {
  let nota = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (respostas[i] === gabarito[i]) {
      nota++;
    }
  }
  return nota;
}

// Loop para adicionar alunos
while (continuar) {
  // Pergunta o nome do aluno
  let nome = prompt("Digite o nome do aluno:");

  // Pergunta as respostas do aluno para cada questão
  let respostas = [];
  for (let i = 0; i < gabarito.length; i++) {
    respostas.push(prompt(`Digite a resposta da questão ${i+1}:`));
  }

  // Calcula a nota do aluno e armazena no array de alunos
  let nota = calcularNota(respostas);
  alunos.push({nome: nome, nota: nota});

  // Pergunta se deseja adicionar outro aluno
  continuar = confirm("Deseja adicionar outro aluno?");
}

// Exibe a nota de cada aluno
console.log("Notas dos alunos:");
for (let i = 0; i < alunos.length; i++) {
  console.log(`${alunos[i].nome}: ${alunos[i].nota}`);
}

// Calcula a maior nota, a menor nota e a média das notas
let maiorNota = alunos[0].nota;
let menorNota = alunos[0].nota;
let somaNotas = alunos[0].nota;
for (let i = 1; i < alunos.length; i++) {
  if (alunos[i].nota > maiorNota) {
    maiorNota = alunos[i].nota;
  }
  if (alunos[i].nota < menorNota) {
    menorNota = alunos[i].nota;
  }
  somaNotas += alunos[i].nota;
}
let media = somaNotas / alunos.length;

// Exibe as estatísticas das notas
console.log(`Maior nota: ${maiorNota}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Média das notas: ${media}`);
console.log(`Quantidade de alunos: ${alunos.length}`);
