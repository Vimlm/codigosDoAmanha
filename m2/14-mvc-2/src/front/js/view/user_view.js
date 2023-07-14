const div = document.querySelector('div');
const inputText = document.querySelector('input')
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  anotacao.renderizaAnotacao(inputText.value);
})