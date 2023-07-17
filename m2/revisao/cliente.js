class Cliente extends Pessoa{
  constructor(nome, cpf, email, telefone, codRegistro){
    super(nome, cpf, email, telefone)
    this.codRegistro = codRegistro
  }
  mostrar(){
    console.log("mostrar metodo de cliente")
  }
}

const victor = new Cliente("victor", "12312312312", "vivi@gmail.com", 41912312312, 12345678910);

const day = new Cliente("day", "1222212", "day@gmail.com", 422212342312312, 123231910);


const { nome: vivi } = victor;
const  { nome: nomeDay } = day; 