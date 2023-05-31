/* Utilizando funções / métodos de string vistos, vamos implementar um validador de e-mail.
Em uma nova pasta, utilizando arquivos HTML e JavaScript:
● Criem uma função chamada validaEmail. Sua função deve:
○ Receber uma string;
○ Retornar “true” caso seja um e-mail válido (inicialmente, basta verificar a utilização de ‘@’);
○ Retornar “false” caso contrário;
● Solicitem o e-mail do usuário utilizando o prompt;
● Criem uma função chamada ExibeResultadoValidacao. Sua função deve:
○ Receber o resultado da validação do e-mail;
○ Exibir, utilizando document.write, “email validado” caso seja um endereço de e-mail;
○ Exibir, utilizando document.write, “email fornecido INVALIDO” caso contrário;
● Testem as possíveis saídas com diferentes valores de entrada. */

function validaEmail(email) {
  if(email.indexOf('@') != -1) {
    return true;
  } else {
    return false;
  }
}

var email = prompt('Digite um email válido: ');

var validacao = validaEmail(email);

function exibeValidacao(validacao) {
  if(validacao) {
    document.write(`<h1>Email validado com sucesso: ${validacao}</h1>`);
  } else {
    document.write(`<h1>Email INVALIDO: ${validacao}</h1>`);
  }
}

exibeValidacao(validacao);


