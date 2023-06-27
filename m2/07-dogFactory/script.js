//Arrays criadas
let nomes = ['Andre', 'Yohan', 'Victor', 'Josh'];
let pesos = [12, 15.2, 17, 10];
let racas = ['labrador', 'sem raça', 'leonino', 'chihuahua'];

//Array de objetos
let cachorros = [];

//Fabrica de Cachorros
function factoryDog(nome, peso, raca) {
  return {
    nome: nome,
    peso: peso,
    raca: raca,
  }
}

//Pegamos as arrays e utilizamos a função factoryDog para criar cachorros e jogamos em cachorros.
function criarCachorro(nome, peso, raca) {
  for(let i = 0; i < peso.length; i++) {
    let  cachorro = factoryDog(nome[i], peso[i], raca[i])
    cachorros.push(cachorro);
  }
}
//Chama função e da o console 
criarCachorro(nomes, pesos, racas);
console.log(cachorros)
