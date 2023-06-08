/* Guarde em um array 3 itens que você levaria para uma ilha deserta para sobreviver.Exiba na tela a seguinte frase: "Eu levaria para uma ilha deserta: {item 1}, {item 2} e {item 3}"*/

var suprimimentos = [];

function itensSuprimento() {
  var qtdItens = prompt('Informe quantos itens você quer levar para a ilha');
  while(qtdItens > suprimimentos.length) {
    var item = prompt('Informe o item que quer levar');
    suprimimentos.push(item);
  }
}

itensSuprimento();

document.write(`Eu levaria para ilha<br><ul>`);
for(var i = 0; i < suprimimentos.length; i++) {
  document.write(`<li>${suprimimentos[i]}</li>`);
}
document.write(`</ul>`);
