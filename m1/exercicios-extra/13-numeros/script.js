/* Crie um programa com as seguintes funções: Dobro: essa função recebe um número como parâmetro e retorna o dobro dele como resultado Metade: essa função recebe um número como parâmetro e retorna a metade dele como resultado Saudação: essa função recebe uma string "nome" como parâmetro e retorna o texto "olá {nome}!Tudo bem?" */
var numero = prompt('Escolha um número');
var nome = prompt('Informe o seu nome');

function dobro(numero) {
  return `O dobro de ${numero} é ${numero * 2}`;
}

function metade(numero) {
  return `A metade de ${numero} é ${numero / 2}`;
}

function saudacao(nome) {
  return `Olá ${nome}! Tudo bem?`;
}

document.write(`${dobro(numero)}<br>`);
document.write(`${metade(numero)}<br>`);
document.write(`${saudacao(nome)}`);