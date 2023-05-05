

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

console.log(`Quantidade de alunos: ${quantidadeAlunos}`);
console.log(`Nota máxima é do aluno : ${nmax}`);
console.log(`Nota mínima é do aluno: ${nmin}`);
console.log(`Média das notas: ${mediaNotas}`);
console.log("Maior nota:")
console.log(listnot[0].nome);
console.log(listnot[0].nota);
console.log("Menor nota:")
console.log(listnot[1].nome);
console.log(listnot[1].nota);
