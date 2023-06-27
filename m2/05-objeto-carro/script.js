/* Possuir um objeto que represente um carro;
• O carro deve possuir as seguintes características: cor, capacidade do tanque, quantidade de combustível no tanque, consumo médio (Km/Litro);
• O carro deve possuir métodos que:
• Forneçam a previsão de quantos Km espera-se rodar com a quantidade de combustível;
o Ande uma determinada quantidade de Km (argumento) e diminua a quantidade de gasolina do tanque a partir da quantidade Km rodados e da média de consumo;
• Getters e Setters para: cor, capacidade do tanque e consumo médio. */

let carro = {
  cor: 'azul',
  capacidade: 50,  
  qtdCombustivel: 50,
  consumo: 15,
  rodar: function(km) {
    let autonomia = this.autonomia();
    if(km <= autonomia && km > 0) {
      let cons = km / 15;
      this.capacidade -= cons;
      console.log(`Você rodou ${km}.\nGastou ${cons.toFixed(2)}L de combustível.\nSobrou no seu tanque ${this.capacidade.toFixed(2)}L de combustível.`);
    } else {
      if(km < 0) {
        console.log('O km não pode ser negativo.');
      } else if(km <= autonomia) {
        console.log('Não há combustível suficiente para rodar.');
        }
      }
  },

  autonomia: function() {
    let autonomia = this.qtdCombustivel * this.consumo;
    return autonomia;
  },
  
  //getters and setters
  setCor: () => {
    this.cor = prompt('informe uma cor.');
  },
  getCor: () => {
    return this.cor;
  },
  setCapacidade: () => {
    this.capacidade = prompt('informe a capacidade do carro.');
  },
  getCarro: () => {
    return this.capacidade;
  },
  setQtdCombustivel: () => {
    this.qtdCombustivel = prompt('informe um nome.');
  },
  getCarro: () => {
    return this.qtdCombustivel;
  },
}