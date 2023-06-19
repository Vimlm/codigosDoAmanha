let select = document.getElementById('select');
let botao = document.getElementById('caixabotao');
let inputValor = document.getElementById('input');

botao.addEventListener('click', () => {
  if(entrada.value == 'celsius' && saida.value == 'fahrenheit') {
    celsiusFahrenheit(entrada.value);
  } else if(entrada.value == 'celsius' && saida.value == 'kelvin') {
    celsiusKelvin(entrada.value);
  } else if(entrada.value == 'fahrenheit' && saida.value == 'celsius'){
    clicou3();
  }
});

function celsiusFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function celsiusKelvin(celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
}

function mostrarResultado() {

}

