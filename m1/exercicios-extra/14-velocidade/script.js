/* Crie uma função que receba a velocidade de um carro e o nome do motorista. Caso a velocidade esteja acima de 80km, o motorista deve receber uma multa e pontos na carteira, caso contrário exiba apenas a quilometragem recebida. Cálculo da multa: para cada KM a mais que o limite permitido, deve ser cobrado $10. Cálculo de pontos: se o motorista ultrapassou:
até 10% da quilometragem permitida, receberá 1 ponto na carteira.
  de 11% a 30% receberá 5 pontos.
  de 31% a 50% receberá 10 pontos.
  acima de 50% carteira suspensa.
Exiba todas as respostas na tela. */

function velocidade() {
  var velocidade = Number(prompt('Informe a velocidade do carro'));
  var nome = prompt('Informe o nome do motorista');
  if(velocidade > 80) {
    var velocidadeAcima = velocidade - 80;
    if(velocidadeAcima >= 40) {
      document.write(`${nome} você teve sua carteira Suspensa. A velocidade foi de ${velocidade}, passou acima dos 50% permitido`);
    } else if(velocidadeAcima < 12.4) {
      document.write(`${nome} você recebeu uma multa, sua velocidade foi ${velocidade}, o valor da multa foi de R$${velocidadeAcima * 10} reais.`);
    } else {
      document.write(`${nome} você recebeu uma multa, sua velocidade foi ${velocidade}, o valor da multa foi de R$${velocidadeAcima * 10} reais.`);
    }

  } else {
    document.write(`Você passou a ${velocidade} km/h, respeitou o limite de velocidade.`);
  }
}

velocidade();