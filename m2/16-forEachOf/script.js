/*
  Utilize a classe meuArray para implementar os métodos funcionais map, forEach, filter, reduce
*/

class MeuArray {
  constructor(...elementos) {
    this.arr = [...elementos];
  }

  push(...elementos) {
    this.arr = [...this.arr, ...elementos];
  }

  pop() {
    const topo = this.arr.pop();
    return topo;
  }

  map(callback) {
    //criando cópia para que arr não possa ser modificado (sem efeitos colaterais)
    const copia = this.arr;
    const result = [];
    for (let elemento of copia) {
      result.push(callback(elemento));
    }
    return result;
  }

  forEach() {
    for(let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }

  forEach2() {
    for(let element of this.arr) {
      console.log(element);
    }
  }
}

//instanciando objeto MeuArray
const meuArr = new MeuArray("Olá", "Mundo!");
meuArr.forEach();
meuArr.forEach2();

//testando implementação do MAP
// const gritando = meuArr.map(element => element.toUpperCase());
// console.log(gritando);

// gritando.push('Mais um');
// console.log(gritando);

// //transforma em array
// const arrayVerdadeiro = Array.from(gritando);

// gritando.forEach(element => {
//   console.log(element);
// });

// const arrayFilter = gritando.filter(word => word.length == 3);
// console.log(arrayFilter);

// const arrayReduce = gritando.reduce((acc, cur) => {
//   console.log(acc + cur)
// })

