var i = 0;
function aberto() {
  if(i == 0) {
    var container = document.getElementById('container');
    var paragrafo = document.createElement('p');
    var abrir = document.createTextNode('Estamos abertos!');
    paragrafo.appendChild(abrir);
    container.append(paragrafo);
  } else if (i == 2) {
    document.querySelector('p').innerHTML = 'Estamos abertos!';
  }
  i = 1;
}

function fechado() {
  document.querySelector('p').innerHTML = 'Fechando!';
  i = 2;
}
