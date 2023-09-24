class UsuarioController {
  /**
   * 
   * @param {Express} app 
   */
  static rotas(app) {
    app.get('/usuarios', (req, res) => {
      res.status(200).json({
        "usuarios": {
          "usuario01": {
            nome: 'Victor',
            email: 'victor@email.com',
            idade: 24
          },
          "usuario02": {
            nome: 'Matheus',
            email: 'matheus@email.com',
            idade: 25
          },
          "usuario03": {
            nome: 'Lucas',
            email: 'lucas@email.com',
            idade: 26
          },
          "usuario04": {
            nome: 'Martins',
            email: 'martins@email.com',
            idade: 27
          },
        }
      });
    });
  }
}

export default UsuarioController;