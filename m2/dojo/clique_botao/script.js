// 1. Selcionar botão;
// 2. Criar evento de escuta;
// 3. Escolher evento de escuta;
// 4. Definir função para executar ao clicar;
// 5. Clicar e testar saidas;

var botao = document.getElementById('botao');


// botao.addEventListener('click', function() {
//   var mensagemTexto = document.getElementById('mensagem-texto');
//   var parafrafo = document.createElement('p');
//   parafrafo.innerText = "botao clicado";
//   mensagemTexto.appendChild(parafrafo);
// });

botao.addEventListener('click', function() {
  var mensagemTexto = document.getElementById('mensagem-texto');
  mensagemTexto.innerHTML = `<p>botao clicado</p>`
});