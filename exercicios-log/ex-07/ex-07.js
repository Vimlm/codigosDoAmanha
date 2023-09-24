// 07- Crie um programa que calcule o número de Fibonacci para um determinado número.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, ...

let numeroVezes = 17;

function fibonacci(numeroControle) {
  let varAuxiliar;
  let numeroAnt = 1;
  let numeroSuc = 1;

  for(let i = 1; i <= (numeroVezes - 2); i++) {
    varAuxiliar = numeroAnt + numeroSuc;
    numeroAnt = numeroSuc;
    numeroSuc = varAuxiliar;
  }

  return numeroSuc;
}

console.log(fibonacci(numeroVezes));