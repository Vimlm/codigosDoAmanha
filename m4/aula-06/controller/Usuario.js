class Usuario {
  /**
   * Criando rotas de usuário
   * @param {Express} app 
   */
  static rotas(app) {
    app.get('/usuarios', (req, res) => {
      res.status(200).json({
        usuario: "Usuário"
      }) 
    })
  }
}

export default Usuario;