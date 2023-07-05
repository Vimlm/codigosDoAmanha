//Syntax Sugar
const object = {
  key1: 10,
  key2: 20,
  key3: 30,
  key4: 40,
}

const { key1 } = object;
console.log(key1);


//Fila atividade
class Fila {
  constructor() {
    this.enfileirados = []
  }

  enfileirar(...pessoas) {
    this.enfileirados = [...this.enfileirados, ...pessoas]
    console.log('Pessoas enfileiradas');
  }

  furarFila(...pessoas) {
    this.enfileirados = [...pessoas, ...this.enfileirados]
  }

  mostrarFila() {
    for (const enfileirados of this.enfileirados) {
      console.log(enfileirados);
    }
  }

  atender() {
    console.log(`${this.enfileirados[0]} atendido com sucesso`)
    this.enfileirados.shift();
  }
}

const pessoa = new Fila();