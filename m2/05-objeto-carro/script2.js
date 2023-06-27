function factoryDog(nome, peso, raca) {
  return {
    nome: nome,
    peso: peso,
    raca: raca,
  }
}

let belinha = factoryDog('belinha', 12, srd);
console.log(belinha);