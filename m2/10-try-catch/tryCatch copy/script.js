//1 - criar uma classe com nome pilha; ✓
//2 - criar um construtor para essa classe; ✓
//3 - criar um atributo "armazen"; ✓
//4 - criar metodo add no armazen; ✓
//5 - remover no armazen; ✓
//6 - testar valores; ✓

// Pascal Case
class modeloPilha {
  armazen = []; //atributo

  constructor(parametro) {
   this.armazen = parametro; 
  } // constructor

  addPilha(item){
    this.armazen.unshift(item)
  }

  removerPilha() {
    this.armazen.shift();
  }
}

const arrayPilha = [1, 2, 3];
const filhoPilha = new modeloPilha(arrayPilha);

//Empilhar 
class modeloEmpilha{
  armazen = []; //atributo

  constructor(parametro) {
   this.armazen = parametro; 
  } // constructor

  addPilha(item){
    this.armazen.push(item)
  }

  removerPilha() {
    this.armazen.pop();
  }
}

const arrayEmpilha = [1, 2, 3];
const filhoEmpilha = new modeloPilha(arrayEmpilha);

