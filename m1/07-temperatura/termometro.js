//declarado a variavel temperatura
var temperatura;

//atribuiu valor a temperatura
temperatura =  36.5;

if(temperatura > 38) {
  console.log("teste 01: você está COM febre");
} else {
  console.log("teste 01: você está SEM febre");
}

temperatura = 38;

if(temperatura > 38) {
  console.log("teste 02: você está COM febre");
} else {
  console.log("teste 02: você está SEM febre");
}

temperatura = 99;

if(temperatura > 38) {
  console.log("teste 03: você está COM febre");
} else {
  console.log("teste 03: você está SEM febre");
}