/* Possuir um objeto que represente um carro;
• O carro deve possuir as seguintes características: cor, capacidade do tanque, quantidade de combustível no tanque, consumo médio (Km/Litro);
• O carro deve possuir métodos que:
• Forneçam a previsão de quantos Km espera-se rodar com a quantidade de combustível, e o consumo médio;
o Ande uma determinada quantidade de Km (argumento) e diminua a quantidade de gasolina do tanque a partir da quantidade Km rodados e da média de consumo;
• Getters e Setters para: cor, capacidade do tanque e consumo médio. */

let  carro = {
  cor: '',
  capacidade: 0,
  qtdCombustivel: 0,

  //funções
  consumoMedio: () => {
    
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