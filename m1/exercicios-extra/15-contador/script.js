/* Receba um número positivo do usuário, mostre na tela todos os números entre 0 e o número recebido de forma decrescente. */
var numero = 0

function escolhaNumero() {
  while(numero <= 0) {
    numero = prompt('Informe um número positivo');
    if(numero <= 0) {
      console.log('Esse número não é positivo, escolha outra');
    } else {
      console.log('Número escolhido com sucesso.');
    }
  }
}

escolhaNumero();

function contador(numero) {
  document.write(`O número escolhido foi ${numero}<br>Mostrando todos os números de ${numero} a 0<br>`);
  for(numero; numero >= 0; numero--) {
    document.write(`Número: ${numero}<br>`)
  }
}

contador(numero);