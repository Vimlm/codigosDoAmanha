let categoria = document.getElementById('categoria');
let uniEntrada = document.getElementById('uniEntrada');
let uniSaida = document.getElementById('uniSaida');

categoria.addEventListener('change', selecionaCategoria);

function selecionaCategoria() {
  if(categoria.value === 'comprimento') {
    uniEntrada.innerHTML = `
      <option value="metros">Metros</option>
      <option value="centimetros">Centrimetros</option>
      <option value="polegadas">Polegadas</option>
    `
    uniEntrada.addEventListener('change', () => {
      
    })
  } else if(categoria.value === 'peso') {
    

  } else if(categoria.value === 'temperatura') {
    
  }
}