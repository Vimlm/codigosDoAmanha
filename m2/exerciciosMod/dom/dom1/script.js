/* 
O que é para fazer:

Adicione um novo item na lista existente com o texto "Novo item".

Como Fazer:

Identifique o elemento da lista onde o novo item deve ser adicionado;
Crie um novo elemento com o método document.createElement();
Adicione o texto desejado no novo elemento com o método textContent;
Adicione o novo elemento na lista com o método appendChild(). */

// const list = document.querySelector("ul")
// const novoElemento = document.createElement('li');
// novoElemento.innerText = 'Novo Item'
// lista.appendChild(novoElemento)

/* Acesse o elemento title com o método document.querySelector();
Altere o texto do elemento com a propriedade textContent. */

// const titulo = document.querySelector('title');
// titulo.textContent = "Lia te amo"

// Remova o terceiro item da lista.

// Como Fazer:

// Identifique o elemento a ser removido com o método document.querySelector();
// Acesse o elemento pai do elemento a ser removido com a propriedade parentNode;
// Remova o elemento com o método removeChild().

// const elemento = document.querySelector('li');

// const dad = elemento.parentNode;

// dad.removeChild(elemento);

// const listChildren = dad.children;

// const lastBOChildren = listChildren[listChildren.length - 2];

// lastBOChildren.remove();



/* Altere a cor de fundo do botão para vermelho.

Como Fazer:

Acesse o elemento do botão com o método document.querySelector();
Altere a propriedade backgroundColor do estilo do elemento. */

// const botao = document.querySelector('button');
// botao.style.background = 'red';

// const cliente = {
//   nome: 'Victor',
//   sobrenome: 'Martins',
//   identificao: 123
// }

// for (const key in cliente) {
//   console.log(cliente[key]);
// }

// class Carro {
//   nome = '';
//   ano = 0;

//   constructor(nome, ano) {
//     this.nome = nome;
//     this.ano = ano;
//   }
// }

// const honda = new Carro('Mazda', 1994);

// console.log(honda);

class Pessoa {
  nome = ''
  sobrenome = ''
  
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

function criarPessoa(nome, sobrenome) {
  const pessoa = new Pessoa(nome, sobrenome);
  return pessoa ;
}

const pessoa1 = criarPessoa('Victor', 'Martins');
const pessoa2 = criarPessoa('Yohan', 2007);
console.log(`O nome é: ${pessoa1.nome}\nO sobrenome é: ${pessoa1.sobrenome}`);

console.log(`${pessoa1} \n${pessoa2}`)