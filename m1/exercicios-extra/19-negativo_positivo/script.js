/* Crie uma função que receba um número negativo e retorne um número positivo. Mostre na tela o resultado. */
var numero = 0;
while(numero >= 0) {
  numero = Number(prompt('Informe um número negativo'));
  if(numero > 0) {
    alert('O número informado não é negativo.');
  } else {
    alert('O número informado foi negativo, vamos transforma-lo em positivo.');
  }

}

function negativoParaPositivo(numero) {
  return numero * -1;
}

document.write(`O número ${numero} transformando para positivo fica ${negativoParaPositivo(numero)}`);