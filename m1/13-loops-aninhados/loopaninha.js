var gastos = [
  [10, 20, 30, 40, 50],
  [60, 70, 80, 90, 100],
  [110, 120, 130, 140, 150],
]

// for(var i = 0; i < gastos.length; i++) {
//   console.log(gastos[i]);
//   var totalGastos = 0;
//   for(var j = 0; j < gastos[i].length; j++) {
//     totalGastos += gastos[i][j];
//   }
// }
// console.log(totalGastos);

//Forma melhorada de fazer isso
function somaGastos(gastos) {
  var total = 0;
  for(var i = 0; i < gastos.length; i++) {
    total += gastos[i];
  }
  return total;
}

for(var i = 0; i < gastos.length; i++) {
  var totalSemanas = 0;
  var total = 0;
  console.log(`Gastos na semana ${i}: ${somaGastos(gastos[i])}`);
  for(var j = 0; j < gastos[i].length; j++) {
    totalSemanas += gastos[i][j];
    total += totalSemanas;
  }
}
console.log(total);
