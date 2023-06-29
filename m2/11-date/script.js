const dataAtual = new Date();
console.log(`data atual: ${dataAtual}`);

const dia = dataAtual.getDay();
console.log(`dia da semana atual: ${dia}`);

const mes = dataAtual.getMonth();
console.log(`mes atual: ${mes}`);

const ano = dataAtual.getFullYear();
console.log(`ano atual: ${ano}`);

const horas = dataAtual.getHours();
console.log(`hora atual: ${horas}`);

const minutos = dataAtual.getMinutes();
console.log(`minutos atual: ${minutos}`);

const segundos = dataAtual.getSeconds();
console.log(`segundos atual: ${segundos}`);

const timeStamp = Date.now();
console.log(`Data atual com milissegundos: ${timeStamp}`);

//*******************************************************************
let tempo;
const guardarData = document.getElementById('coletarData');
const showTempo = document.getElementById('mostrarTempo');

guardarData.addEventListener('click', () => {
   return tempo = coletarData();
});

showTempo.addEventListener('click', () => {
  console.log(`Desde o seu clique passou: ${(mostrarTempo() / 1000).toFixed(2)} segundos`)
})

function coletarData() {
  return Date.now();
}

function mostrarTempo() {
  return Date.now() - tempo;
}