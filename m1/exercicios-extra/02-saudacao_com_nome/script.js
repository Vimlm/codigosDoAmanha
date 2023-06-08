/* Crie uma função que recebe como parâmetro o nome de uma pessoa. Essa função deve retornar o texto em
duas linhas distintas: "Olá {nome}." "Tudo bem {nome}?". Utilize document.write para escrever na tela o
resultado desta função com os parâmetros a sua escolha. */

function saudacao(nome) {
  return `Olá ${nome}.<br>Tudo bem ${nome}?`;
}

document.write(saudacao('Victor'));