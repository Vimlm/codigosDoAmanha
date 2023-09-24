// Promise - The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value;
let condicaoSatisfeita = false;
const promessa = new Promise((resolve, reject) => {
  condicaoSatisfeita ? resolve('Valor retornado se cumprioda') : reject('Valor retornado caso não seja cumprida.');
});

promessa.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})