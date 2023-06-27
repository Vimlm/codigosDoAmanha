// Tipos de Dados
let nome = 'Victor';
let sobrenome = 'Martins';
let possuiCurso = true;
let caneta;
let nulo = null;
let objeto = {
}

// console.log(typeof arr);

//Variáveis
var altura = 1.95;
let maisUmNome = 'Mais Um Nome';
const nomeFixo = 'Batata';

// console.log(nomeFixo);

//Operadores Aritiméticos

// + - / * %
// let resultado = n1 * n1;

// n1 = n1 + 5;
// n1 += 5;

// Operadores Lógicos
// > maior 
// < menor
// >= maior igual
// <= menor igual
// && se duas condicoes sao verdades
// || se uma ou outra condicao
// ! inverte a condição

// if (), else if () else
// if
// if elseif
// if else
// xxxxx if elseif else elseif
let n1 = 20;
let n2 = '20';
let temFalculdade = true;

// if(n1 === n2) {
//   console.log(n1 + n2);
// } else {
//   console.log('Diferentes');
// }

//Arrays
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// inicializador (i), condição (i < 10), incrimentro (i++)
// let i = 0;

// while(i < 10) {
//   console.log(i);
//   i++
// 
// }

// for(let i = 100; i > 0; i--) {
//   console.log(`i = ${i}`);
// }

//Funções - fazer alguma coisa, que tipo de coisa?? Executa blocos de código...

// Pra que serve uma function????

//Criar blocos de códigos reutilizáveis.

//As funções elas são divididas em dois momento.  O que vai acontecer (declarar função) e o resultado (chama/executa a função).

// function nome(parametro) {
//   executar aqui dentro
// }

// função com return e com pamatro
function soma(num1, num2) {
  return num1 + num2;
}
// função com return e sem parametro
function latir() {
  return 'Au au';
}
// função sem return e com parâmetro
function nomeCompleto(nome, sobrenome) {
  console.log(nome + ' ' + sobrenome);
}

// funçao sem return e sem parâmetro
function cair() {
  console.log('Cai');
}
soma(1, 3); //4

// cair();

// nomeCompleto('Victor', 'Martins');

// console.log(latir());

function habitacao() {
  return false;
}

function dirigir(idade, habilitação) {
  if(idade >= 18) {
    if(habilitação) {
      console.log('Posso dirigir ')
    } else {
      console.log('Não tem habitação')
    }
  } else {
    console.log('Não é maior de idade.')
  }
}

let idade = 17;

dirigir(idade, habitacao());