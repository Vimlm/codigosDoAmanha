//Uma requisição == pedido para buscar Pokemon por nome
//Montar objeto da requisição
// let reqNome = new XMLHttpRequest();

// //Montar a requisição em sí
// let pokemonName = 'ditto'
// reqNome.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

// //Transformar a requisição em async e 
// reqNome.onload = () => {
//   if(reqNome.status === 200) {
//     respObjNome = JSON.parse(reqNome.responseText)
//     console.log(`O nome do Pokemon é ${respObjNome.name}`);
//     console.log(respObjNome);
//   }
// }

// reqNome.send();

// //Buscar pokemon por ID
// //Montar objeto de requisição
// let reqId = new XMLHttpRequest();

// //Montar a requisição
// let idPokemon = 10;
// reqId.open('GET', `https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

// reqId.onload = () => {
//   if(reqId.status === 200) {
//     respObjId = JSON.parse(reqId.responseText);
//     console.log(`O id do pokemon é ${respObjId.id}`);
//   }
// }
// reqId.send();

// //Requisição para buscar movimento

// let reqMov = new XMLHttpRequest();

// let move = 'ember'

// reqMov.open('GET', `https://pokeapi.co/api/v2/move`);

// let nomeMov;

// reqMov.onload = () => {
//   if(reqMov.status === 200) {
//     resObjMov = JSON.parse(reqMov.responseText);
//     resObjMov.results.forEach(moves => {
//       if(moves.name === 'pay-day') {
//         nomeMov = moves.name;
//       }
//     });;
//   }
//   console.log(nomeMov);
// }

// reqMov.send();

// Todos Pokemons
let reqPokemons = new XMLHttpRequest();

//Montar a requisição em sí
reqPokemons.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);

let pokemons;

//Transformar a requisição em async e 
reqPokemons.onload = () => {
  if(reqPokemons.status === 200) {
    res = JSON.parse(reqPokemons.responseText)
    // console.log(res.results);
    pokemons = res.results;
    pokemons.forEach(pokemon => {
      if(pokemon.name === 'axew') {
        console.log(pokemon.name, pokemon)
      }
    });
  }
}

reqPokemons.send();

// let nome = 'ability'
// url = `https://pokeapi.co/api/v2/${nome}`
// let req2 = new XMLHttpRequest();

// req2.open('GET', url);

//   req2.onload = () => {
//   res = JSON.parse(req2.responseText);
//   console.log(res);
//   }  
// req2.send();