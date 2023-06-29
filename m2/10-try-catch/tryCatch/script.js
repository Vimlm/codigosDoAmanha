function simples(numero) {
  if(numero > 0) {
    console.log("Deu tudo certo");
  } else {
    throw new Error('Erouuuu');
  }
}

try {
  simples(-2)
} catch (e) {
  console.log(e);
}