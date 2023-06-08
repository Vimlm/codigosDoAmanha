/* Escreva um programa para exibir na tela todos os números de 1 a 100, com três exceções. Para números divisíveis por 3, mostre “Fizz” em vez do número, para números divisíveis por 5 (e não 3), mostre “Buzz” e para números divisíveis por 3 e por 5 mostre “FizzBuzz” em vez do número. */

function imprimeNumero() {
  for(var i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log('fizzbuzz');
      continue;
    } else if(i % 5 == 0) {
      console.log('buzz');
    } else if(i % 3 == 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}
imprimeNumero();