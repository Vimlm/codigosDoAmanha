/* Um professor precisa calcular a nota de seus alunos. Criem uma função que receba a quantidade de alunos, o nome dos alunos e para cada aluno, quatro notas, calcule a média dos alunos e mostre na tela o nome de cada aluno com sua média e o resultado final.
Médias:
  0 - 4.9: Reprovado
  5 - 6.9: Recuperação
  7 - 9.9: Aprovado
  10: Aprovado com louvor. 
*/

var alunos = [];
var qtdAlunos = prompt('Informe a quantidade de alunos');
var aluno;

function adicionaAlunos() {
  while(alunos.length < qtdAlunos) {
    aluno = {}
    aluno.nome = prompt('Informe o nome do aluno');
    for(var i = 1; i <= 4; i++) {
      aluno[`nota${i}`] = Number(prompt(`Para o aluno ${aluno.nome} informe a nota ${i}`));
    }
    alunos.push(aluno);
  }
}

adicionaAlunos();

function mediaAluno() {
  alunos.forEach(aluno => {
    var media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
    if(media > 7) {
      console.log(`O aluno ${aluno.nome} foi aprovado com louvor com a média de ${media}`);
    } else if (media < 4.9) {
      console.log(`O aluno ${aluno.nome} foi reprovado com a média de ${media}`);
    } else {
      console.log(`O aluno ${aluno.nome} está de recuperação com a média de ${media}`);
    }
  });
}

mediaAluno();