class TaskController {
  /**
   * 
   * @param {Express} app 
   */
  static rotas(app) {
    app.get('/task', (req, res) => {
      res.status(200).json({
        "tarefas": {
          "tarefa01": {
            usuario: "usuario01",
            nome: "comer repolho",
            descricao: "Pegar o garfo e a faca para comer um repolhão",
            data: "10/09/102",
            status: true
          },
          "tarefa02": {
            usuario: "usuario02",
            nome: "ir a academia",
            descricao: "Pegar uns alter foda, e fazer uma flexão",
            data: "08/10/101",
            status: true
          },
          "tarefa03": {
            usuario: "usuario03",
            nome: "Ver o meu nenem",
            descricao: "Ir para Apiaí, ver o meu nenem",
            data: "35/10/99",
            status: false
          },
          "tarefa04": {
            usuario: "usuario04",
            nome: "Limpar o coco do gatinho Germano",
            descricao: "Pegar a pazinha, e dar aquela peneirada nos coco",
            data: "28/08/100",
            status: true
          },
          "tarefa05": {
            usuario: "usuario02",
            nome: "Dar um abraço no joão",
            descricao: "Dar um abraço no joão sem roupa, e por traz.",
            data: "28/08/2023 - 10:35",
            status: true
          },
        }
      });
    });    
  }
}

export default TaskController;