const inputNome = document.getElementById('pk-name');
const pokeInfo = document.querySelector('.poke-info');
const enviar = document.getElementById('submit');

function renderPokemon(pokemon) {
  pokeInfo.innerHTML = `
  <p>Nome do Pokémon: ${pokemon}</p>
  `
}

function buscarPokemon() {
  let nomePokemon = inputNome.value;
  $.ajax({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`,
    success: function(result) {
      console.log(result);
      console.log(result.name);
      renderPokemon(result.name);
    },
    error: function(e) {
      console.log(e);
    }
  });
}

enviar.addEventListener('click', buscarPokemon);
