//A ideia é que ao clicar nas caixas ele mudaria a cor para deixar o mundinho mais colorido;

// 1. Selecionar as caixas; ✓
// 2. Colocar um evento de escuta nas caixas; ✓
// 3. selecionar o evento de escuta click; ✓
// 4. Cria uma função para mudar a cor das caixas ✓
// 5. Ao clicar na caixa Chama 🔥 a função ✓

// var caixa1 = document.getElementById('caixa1');
// var caixa2 = document.getElementById('caixa2');
// var caixa3 = document.getElementById('caixa3');
// var caixa4 = document.getElementById('caixa4');

var caixa = document.querySelectorAll(".caixa");

function mudarCor(caixa) {
  caixa.style.backgroundColor = 'pink';
}

caixa.addEventListener('click', function() {
  mudarCor(caixa);
});