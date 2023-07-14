const users = [
  {
    nome: "Abraão Farias",
    idade: 22,
    animal: "gato"
  },
  {
    nome: "Michelina Souza",
    idade: 12,
    animal: "Hamster"
  },
  {
    nome: "Venâncio Almeida",
    idade: 45,
    animal: ""
  },
  {
    nome: "Maria Silva",
    idade: 15,
    animal: "Coelho"
  },
  {
    nome: "José Eustáquio",
    idade: 32,
    animal: "Gato"
  },
];

const arrayNomes = users.map( element => element.nome);
console.log(arrayNomes);

const nomeAbrev = arrayNomes.map(element => {
  const nomesArray = element.split(' ');
  return `${nomesArray[0][0]}. ${nomesArray[1][0]}`;
});
console.log(nomeAbrev);

