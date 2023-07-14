function criarUsuario() {
  emailUsuario = email.value;
  senhaUsuario = password.value;
  const usuario = new Usuarios(emailUsuario, senhaUsuario);
  if(verificaUsuario(listaUsuarios, usuario) != null) {
    listaUsuarios.adicionarUsuario(listaUsuarios, usuario);
  };
  console.log(listaUsuarios.listaUsuarios);
}

button.addEventListener('click', event => {
  event.preventDefault();
  criarUsuario();
});

function verificaUsuario(listaUsuarios, usuario) {
  console.log(usuario.getEmail());
}