// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr)

function somaArr(arr) {
  let resultado = 0;
  for (const num of arr) {
    resultado += num;
  }
  return resultado;
}

const arr = [10, 20, 50, 40, 30, 60, 70, 100, 90, 80];
function somaReduce(arr) {
  const somaReduce = arr.reduce((acc, element) => acc += element, valorInicial);
  return somaReduce;
}

function multiplicaArr(arr) {
  let resultado = 1;
  for (const num of arr) {
    resultado *= num;
  }
  return resultado;
}

valorInicial = 40;

// console.log(somaArr(arr));
// console.log(somaArr(arr2));

// console.log(somaReduce(arr.reduce((acc, element) => {
//   console.log(acc);
//   console.log(element);
// }, valorInicial)));
// console.log(somaReduce(arr2));

// console.log(arr.sort((a, b) => {
//   return a - b;
// }).reverse());

// console.log(multiplicaArr(arr));
// console.log(multiplicaArr(arr2));

