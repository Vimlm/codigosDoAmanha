let peso, altura, imc;

peso = 85;
altura = 1.95;

imc = peso / (altura * altura);

if(imc >= 30) {
  console.log("Obeso");
} else if (imc < 25) {
  console.log("Sobrepeso")
} else if (imc < 18.5) {
  console.log("Peso normal");
} else {
  console.log("Abaixo do peso");
}
