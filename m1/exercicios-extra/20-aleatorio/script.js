/* Crie uma função que recebe um número máximo e um número mínimo e retorne 3 números aleatórios entre os números passados como parâmetro. Mostre na tela o resultado. */

function gerarNumerosAleatorios(nMax, nMin) {
  var numeros = [];

  for (var i = 0; i < 3; i++) {
    var numeroAleatorio = Math.floor(Math.random() * (nMax - nMin + 1)) + nMin;
    numeros.push(numeroAleatorio);
  }

  return numeros;
}

var nMax = Number(prompt('Informe um número máximo'));
var nMin = Number(prompt('Informe um número mínimo'));

var numerosAleatorios = gerarNumerosAleatorios(nMax, nMin);

console.log(numerosAleatorios);

