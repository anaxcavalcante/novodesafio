

const gabarito = ['B', 'D', 'A', 'A', 'E', 'C', 'E', 'A', 'B', 'B'];

const listnot = [];


function respostas(nq) {
    const resposta = prompt(`Digite a resposta da questão ${nq} (A, B, C, D ou E):`);
    return resposta.toUpperCase();
}

let nmax = 0;
let nmin = 10;
let somatotal = 0;
let parar = false


while (!parar) {
    const nome = prompt("Digite o nome do aluno (ou 'sair' para encerrar):");
    if (nome === 'sair') {
        parar = true;
    }else{
        let nota = 0;

    for (let i = 1; i <= 10; i++) {
        const resposta = respostas(i);
        if (resposta === gabarito[i - 1]) {
            nota++;
        }
    }

    listnot.push({ nome: nome, nota: nota });

    if (nota > nmax) {
        nmax = nota;
    }
    if (nota < nmin) {
        nmin = nota;
    }

    somatotal += nota;
}



}

for (let i = 0; i < + listnot.length; i++) {
    console.log(`${listnot[i].nome}: ${listnot[i].nota}`);
}

const quantidadeAlunos = listnot.length;
const mediaNotas = somatotal / quantidadeAlunos;

console.log(`Quantidade de alunos: ${quantidadeAlunos}`)
console.log(`Média das notas: ${mediaNotas}`);

let alunoMaiorNota = listnot[0];
for (let i = 1; i < listnot.length; i++) {
    if (listnot[i].nota > alunoMaiorNota.nota) {
        alunoMaiorNota = listnot[i];
      }
    }
    console.log(`Aluno com a maior nota: ${alunoMaiorNota.nome} : ${alunoMaiorNota.nota}`);
    let alunoMenorNota = listnot[0];
    for (let i = 1; i < listnot.length; i++) {
        if (listnot[i].nota < alunoMenorNota.nota) {
            alunoMenorNota = listnot[i];
          }
        }
        console.log(`Aluno com a menor nota: ${alunoMenorNota.nome} : ${alunoMenorNota.nota}`);

