/* 
O que é para fazer:

Adicione um novo item na lista existente com o texto "Novo item".

Como Fazer:

Identifique o elemento da lista onde o novo item deve ser adicionado;
Crie um novo elemento com o método document.createElement();
Adicione o texto desejado no novo elemento com o método textContent;
Adicione o novo elemento na lista com o método appendChild(). */

const lista = document.querySelector("ul")
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

const elemento = document.querySelector('li');

const pai = elemento.parentNode;

pai.removeChild();