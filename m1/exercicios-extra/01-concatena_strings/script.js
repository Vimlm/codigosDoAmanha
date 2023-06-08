/* Crie uma função que recebe como parâmetro duas strings. Essa função deve retornar as duas strings
concatenadas ("juntadas") separadas por um espaço. Utilize document.write para escrever na tela o
resultado desta função com os parâmetros de teste "Olá" e "Mundo!" */

function concatena(pString, sString) {
  return `${pString} ${sString}`;
}

document.write(concatena('Olá', 'Mundo!'));