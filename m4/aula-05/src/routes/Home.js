class Home {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    app.get('/', (req, res) => {
      res.send(
        `
        <h1> Meu Site </h1>
        `
      )
    });
  }
}

export default Home;