// 08- Crie um programa que calcule o máximo divisor comum (MDC) entre dois números.
function calcularMDC(num1, num2) {
  let resto;
  while(resto != 1) {
    num2 = num2 % num1;
  }
  return resto;
}


console.log(calcularMDC(21, 14));