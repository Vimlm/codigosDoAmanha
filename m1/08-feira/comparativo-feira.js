// criar 03 variávels, alimento, precoAnt e precoAtu
var alimento;
var precoAnt;
var precoAtu;

// recebecer valores do nosso usuário de alimento, precoAnt e precoAtu
alimento = prompt("Informe o nome do alimento: ");

// vericar se aliemento é igual (tomate, laranja, abacaxi e limão) == true
if(alimento == 'tomate' || alimento == 'laranja' || alimento == 'abacaxi' || alimento == 'limao') {
// verificar se o precoAnt > < == precoAtu
  precoAnt = Number(prompt("Informe o preço do " + alimento + "da semana passada: "));
  precoAtu = Number(prompt("Informe o preço do " + alimento + "atual: "));

  if(precoAnt < precoAtu) {
  alert("O alimento " + alimento + " aumentou R$" + (precoAtu - precoAnt) + " desde a semana passada.");
  } else if (precoAnt > precoAtu) {
    alert("O alimento " + alimento + " diminuiu R$" + (precoAnt - precoAtu) + " desde a semana passada.");
  } else {
    alert("O alimento " + alimento + " não teve alteração de preço.");
  }
} else {
  alert(alimento + " indisponível na feira");
}

