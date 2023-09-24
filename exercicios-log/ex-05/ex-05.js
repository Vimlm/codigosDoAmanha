// 05- Crie um programa que calcule a média dos números de 1 a 100.

function somaNumeros(numero) {
  let resultado = 0;

  for(let i = 1; i <= numero; i++) {
    resultado += i;
  }
  return resultado/numero;
}

console.log(somaNumeros(5000));
