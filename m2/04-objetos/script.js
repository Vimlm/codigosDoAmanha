

const carro = {
  marcar: 'honda',
  modelo: 'civic',
  ano: 2022,
  pneu: {
    aro: 22,
    modelo: 'michelin',
  }
}

const cachorros = [];

function criarCachorro() {
  let nome = prompt('Informe o nome do cachorro').toLocaleLowerCase();
  let dNascimento = prompt(`Informe a data de nascimento do ${nome}`);
  let raca = prompt(`Qual a raça do ${nome}?`);
  let cachorro = {
    nome: nome,
    dNascimento: dNascimento,
    raca: raca,
    latir: () => {
      console.log(`${nome} latiu`);
    },
    comer: () => {
      console.log(`${nome} comeu`);
    }
  }
  cachorros.push(cachorro);
}
//foreach ele está imprimindo toda vez que não encontra
function buscarCachorro() {
  let nome = prompt('Informe o nome do cachorro que deseja buscar').toLowerCase();
  cachorros.forEach(cachorro => {
    if(cachorro.nome == nome) {
      return console.log(cachorro);
    }
  });
}

function latir() {
  let nome = prompt('Qual cachorro latiu?');
  cachorros.forEach(cachorro => {
    if(cachorro.nome == nome) {
      cachorro.latir();
    }
  });
}

function comer() {
  let nome = prompt('Qual cachorro comeu?');
  cachorros.forEach(cachorro => {
    if(cachorro.nome == nome) {
      cachorro.comer();
    }
  });
}