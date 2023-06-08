/* Crie uma função que recebe como parâmetro um número. Essa função deve retornar o texto "O resto de {número} dividido por 9 é: {resto da divisão}". Utilize document.write para Escrever na tela o resultado desta função com os parâmetros à sua escolha. */

function resto9(numero) {
  var resto = numero % 9;
  return `O resto de ${numero} divididos por 9 é: ${resto}`;
}

document.write(resto9(13));