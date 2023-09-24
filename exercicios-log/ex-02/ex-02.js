// 02- Crie um programa que imprima os números pares de 1 a 100.
function imprimirNumerosPares(qtdVz) {
  for(let i = 1; i <= qtdVz; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}

imprimirNumerosPares(100);