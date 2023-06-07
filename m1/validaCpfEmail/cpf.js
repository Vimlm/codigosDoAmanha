function validaCpf() {
  while(true) {
    var cpf = prompt("Infome o cpf xxx.xxx.xxx-xx");
    if(cpf.length === 14 && cpf.indexOf('.') !== -1 && cpf.indexOf('-') !== -1) {
      alert(`O cpf ${cpf} é um cpf válido.`);
      break;
    } 
    alert(`Cpf ${cpf} inválido, digite novamente.`);
  }
}