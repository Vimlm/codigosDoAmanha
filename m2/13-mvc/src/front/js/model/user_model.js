class Usuarios {
  _email;
  _senha;

  constructor(nome, senha) {
    this._email = nome;
    this._senha = senha;
  }

  getEmail() {
    return this._email;
  }

  setEmail(nome) {
    this._email = nome;
  }
  getSenha() {
    return this._senha;
  }

  setSenha(senha) {
    this._senha = senha;
  }
}

class ListaUsuarios {
  constructor(usuario) {
    this.listaUsuarios = [];
  }

  adicionarUsuario(listaUsuarios, usuario) {
    this.listaUsuarios = [...listaUsuarios.listaUsuarios, usuario];
  }

  // removerUsuario(id) {
  //   for (const usuarios in this.listaUsuarios, indice) {
  //     if (usuarios.id == id) {
  //       this.listaUsuarios = [...this.listaUsuarios[indice]]
  //     }
  //   }
  // }
}

const listaUsuarios = new ListaUsuarios();