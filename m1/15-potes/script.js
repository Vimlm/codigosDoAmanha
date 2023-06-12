// var gaveta = [['meia', 'blusa', 'anel'], ['lapis', 'blusa', 'caneta']];
// var item = prompt('Informe o item que deseja buscar');

// function buscaItem(item) {
//   var i = 0
//   while(true) {
//     if(gaveta[i].indexOf(item) != -1) {
//       document.write(`item ${item} encontrado no pote ${i}<br>`);
//       break;
//     } else {
//       document.write(`Item não encontrado no pote ${i}<br>`)
//     }
//     i++;
//   }
// }

// buscaItem(item);

var gaveta = [];
var pote;

function itens() {
  var qtdItens = prompt('Informe a quantidade de itens a ser adicionado');
  var i = 0;
  pote = [];
  while(i < qtdItens) {
    var item = prompt('Informe o item a ser adicionado');
    adicionaAoPote(item);
    i++;
  }
}

function adicionaAoPote(item) {
  pote.push(item);
}

function adicionaPoteAGaveta() {
  gaveta.push(pote);
  alert("Potes adicionado com sucesso na gaveta.");
}

function buscarItem() {
  var item = prompt('Informe o item a ser adicionado');
  for(var i = 0; i < gaveta.length; i++) {
    if(gaveta[i].indexOf(item) != -1) {
      console.log(`item ${item} encontrado no pote ${i}`);
    } else {
        console.log(`Item não encontrado no pote ${i}`)
      }
  }
}