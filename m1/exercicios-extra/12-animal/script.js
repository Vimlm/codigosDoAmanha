/* Crie uma função chamada escolhaAnimal onde você: Guarde o nome de um animal que você gostaria de ser em uma variável Escreva na página (HTML) a seguinte frase: "Num primeiro momento, eu gostaria de ser um(a): {animal escolhido}". Trocar o valor do animal nesta mesma variável e exiba na tela a seguinte frase na linha de baixo: "Pensando melhor, prefiro ser um(a) {animal scolhido" */
var animal = prompt('Qual animal você gostaria de ser?');

function escolhaAnimal(animal) {
  document.write(`Num primeiro momento, eu gostaria de ser um(a): ${animal}.<br>`);
  setTimeout(() => {
    animal = prompt('Pensando bem....');
    document.write(`Pensando bem... Eu gostaria de ser ${animal}.<br>`);
  }, 3000);
}

escolhaAnimal(animal);