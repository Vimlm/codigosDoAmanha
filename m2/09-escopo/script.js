class Carro {
  nome;
  marca;
  cor;
  velocidaMax;
  combustivel;

  constructor (nome, marca, cor, velocidaMax, combustivel) {
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    this.velocidaMax = velocidaMax;
    this.combustivel = combustivel
  }

  acelerar() {
    console.log(`O ${this.nome} acelerou, e chegou a ${this.velocidaMax} KM/h`);
  }

  freiar() {
    console.log(`O carro ${this.nome} freiou`);
  }

  abastecer(combustivel) {
    if(combustivel == this.combustivel) {
      console.log(`O seu carro utiliza ${this.combustivel} portanto pode abastecer`);
    } else {
      console.log(`O seu carro utiliza ${this.combustivel}, você não pode colocar $${combustivel}`);
    }
  }
}

const rxVision = new Carro('RX-Vision GT3', 'Mazda', 'Vermelho', 200, 'gasolina');

const gol = new Carro('Gol', 'Volkswagem', 'branco', 150, 'etanol');