// 03- Crie um programa que imprima os números ímpares de 1 a 100.
function imprimirNumerosImpar(qtdVz) {
  for(let i = 1; i <= qtdVz; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}

imprimirNumerosImpar(100);