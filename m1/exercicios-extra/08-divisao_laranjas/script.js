/* Joselito está precisando de um programa para ajudar ele na divisão das laranjas entre seus vizinhos. Para obter a quantidade EXATA de laranjas que cada um de seus vizinhos receberá Joselito fornecerá para você a quantidade de laranjas que ele tem e quantos vizinhos entrarão no rateio. A sobra das laranjas: Após a divisão das laranjas, Joselito quer saber quantas laranjas restarão para ele. Para isso, ele continuará fornecendo a quantidade de laranjas que ele possui e quantos vizinhos participarão da divisão.*/

var qtdLaranjas = Number(prompt('Informe a quantidade de laranjas'));
var qtdVizinhos = Number(prompt('Informe quantos vizinhos vão fazer o rateio,'));

function divideLaraja(qtdLaranjas, qtdVizinhos) {
  var restoLaranjas = qtdLaranjas % qtdVizinhos;
  console.log(restoLaranjas);
  return `O número de laranjas foi ${qtdLaranjas} divididos por ${qtdVizinhos}, cada vizinho ficou com ${(qtdLaranjas / qtdVizinhos).toFixed(0)} laranjas, e o Joselito ficou com ${restoLaranjas} laranjas.`
}

document.write(divideLaraja(qtdLaranjas, qtdVizinhos));