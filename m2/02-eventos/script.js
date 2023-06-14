var boxAzulSelecionado = document.getElementById('azul');
var boxVerdeSelecionado = document.getElementById('verde');
var boxVermelhoSelecionado = document.getElementById('vermelho');

var containerSelecionado = document.getElementById('container');

containerSelecionado.addEventListener('click', function () {
  containerSelecionado.classList.toggle('container')
});

boxAzulSelecionado.addEventListener('click', function () {
  boxAzulSelecionado.classList.toggle('azul');
});

boxVerdeSelecionado.addEventListener('click', function () {
  boxVerdeSelecionado.classList.toggle('verde');
})

boxVermelhoSelecionado.addEventListener('click', function () {
  boxVermelhoSelecionado.classList.toggle('vermelho');
})


