import database from "../database/Database.js"

class UsuarioController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    //CRUD

    //Read - Get do http
    app.get('/usuarios', (req, res) => {
      res.status(200).json({
        usuario: {
          nome: 'Victor',
          email: 'Victor@email.com',
          senha: 'xuxu12'
        }
      })
    })
  }
}

export default UsuarioController