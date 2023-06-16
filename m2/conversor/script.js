let categoria = document.getElementById('categoria');
let entrada = document.getElementById('unidade-entrada');
let saida = document.getElementById('unidade-saida');

categoria.addEventListener('change', () => {
  if (categoria.value == 'temperatura') {
    entrada.innerHTML = `
      <option value='celsius'>Celsius</option>
      <option value='fahrenheit'>Fahrenheit</option>
      <option value='kelvin'>Kelvin</option>
    `;
    saida.innerHTML = `
    <option value='fahrenheit'>Fahrenheit</option>
      <option value='celsius'>Celsius</option>
      <option value='kelvin'>Kelvin</option>
    `;
  } else if (categoria.value == 'comprimento') {
    entrada.innerHTML = `
      <option value='metros'>Metros</option>
      <option value='centimetros'>Centimetros</option>
      <option value='polegadas'>Polegadas</option>
    `;
    saida.innerHTML = `
    <option value='centimetros'>Centimetros</option>
      <option value='metros'>Metros</option>
      <option value='polegadas'>Polegadas</option>
    `;
  } else if (categoria.value == 'peso') {
    entrada.innerHTML = `
      <option value='kilograma'>Kilograma</option>
      <option value='grama'>Grama</option>
      <option value='libra'>Libra</option>
    `;
    saida.innerHTML = `
    <option value='grama'>Grama</option>
      <option value='kilograma'>Kilograma</option>
      <option value='libra'>Libra</option>
    `;
  }
});
