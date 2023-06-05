/* Criem uma função chamada dirigirEBeber para verificar se a pessoa já pode dirigir e beber. 
Sua função deve:
○ Receber uma idade;
○ Caso a idade fornecida seja maior que 18, retorne “Já pode dirigir e beber”;
○ Caso contrário, retorne “Não pode nem dirigir nem beber”;

Criem uma outra função chamada previsaoRodagem para verificar o quanto será possível rodar
sem abastecer. Sua função deve:
○ Receber a quantidade de litros de gasolina no tanque do carro;
○ Receber a quilometragem média por litro;
○ Retornar a estimativa de Km que podem ser rodados nas circunstâncias fornecidas. */

//Posso Dirigir e Beber?
//Receber uma idade;
var idade = 11;

//if else (condição)
function dirigirEBeber(idade) {
  if(idade >= 18) {
    return 'Já pode dirigir e beber';
  } else {
    return 'Não pode nem dirigir nem beber';
  }
}

//Saida da função passando idade como argumento
console.log(dirigirEBeber(idade));


//Quanto eu posso rodar ainda?
//Receber a quantidade de litros de gasolina no tanque do carro
var qtdLitros = 20;

//Receber a quilometragem média por litro
var consumoMedio = 8;

function previsaoRodagem(qtdLitros, consumoMedio) {
  var totalRodado = qtdLitros * consumoMedio;
  return totalRodado;
}

console.log(previsaoRodagem(qtdLitros, consumoMedio))