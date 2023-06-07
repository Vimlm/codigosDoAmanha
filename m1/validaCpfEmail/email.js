function validaEmail() {
  while(true) {
    var email = prompt('Informe um email');
    if(email.indexOf('@') >= 3 && email.indexOf(' ') === -1) {
      alert(`O email ${email} é um email válido`);
      break;
    }
    alert(`O email ${email} é um email inválido`);
  }
}