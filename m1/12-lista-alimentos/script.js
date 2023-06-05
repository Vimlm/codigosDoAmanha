/* Em uma nova pasta, utilizando arquivos HTML e JavaScript, desenvolvam um programa que:
● Receba a quantidade de elementos que deve ser inserida na lista;
● Utilize um array para armazenar os elementos da lista;
● Enquanto a quantidade de elementos na lista não for igual ao fornecido pelo usuário, pergunte qual é o
próximo elemento da lista;
● Valide a entrada:
○ caso o elemento fornecido tenha número ímpar de caracteres, adicione na lista;
○ caso contrário, alerte o usuário de que o elemento é inválido e solicite um novo;
● Ao final, a lista completa com os elementos validados deve ser exibida na página web. 
* Dividam seu código em funções quando necessário ou possível! */

var listaAlimentos = [];

var qtdItens = prompt('Informe a quantidade de itens na lista');

while (qtdItens > listaAlimentos.length) {
  var item = prompt('informe um item: ');
  validaItem(item);
}

mostrarLista(listaAlimentos);

function validaItem(item) {
  if(item.length % 2 == 0) {
    alert(`O alimento informado não pode ser adicionado na lista.`);
  } else {
    console.log(`Item adicionado a lista.`);
    adicionaItem(item);
  }
}

function adicionaItem(item) {
  listaAlimentos.push(item);
}

function mostrarLista(listaAlimentos) {
  var i = 0;
  while(i < listaAlimentos.length) {
    document.write(`<p>${listaAlimentos[i]}</p>`);
    i++;
  }
}