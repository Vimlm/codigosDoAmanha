class Funcionario extends Pessoa {
  constructor(nome, cpf, email, telefone, cargo){
    super(nome, cpf, email, telefone);
    this.cargo = cargo
  }
  mostrar(){
    console.log("metodo mostrar de funcionario")
  }
}

const dayane = new Funcionario("dayane", "12150790951", "daystefane@gmail.com", 41998668770, "ser chata");
