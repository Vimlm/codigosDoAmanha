/* Recebe uma string e uma callback;
⇨ Após 5 segundos executa a callback passando como parâmetro para ela
a string inicial (utilize setTimeout).
-------
⇨ Chame esta função com os seguintes parâmetros:
◼ ‘Olá com delay de 5s’
◼ Uma callback (arrow function) que faz o console.log do primeiro argumento
passado para ela. */

function delay(string, funcao) {
  setTimeout(() => {
   funcao(string);
  }, 5000);
}

delay("Victor, depois de 5 segundos", (string) => {
  console.log(string);
});

