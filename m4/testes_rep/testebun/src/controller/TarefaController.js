import DatabaseMetodos from "../utils/DatabaseMetodos.js";
import TarefaModel from "../model/TarefaModel.js";
import database from "../database/Database.js";

class TarefaController {
  /**
   * 
   * @param { Express } app 
   */
  static rotas(app) {
    app.post('/adicionar', (req, res) => {
      const requisicao = Object.values(req.body);

      if(requisicao.length > 0) {
        const tarefa = new TarefaModel(...requisicao);
        DatabaseMetodos.adicionarTarefa(tarefa);
  
        res.status(200).json({
          message: `Registro inserido com sucesso`
        });
      } else {
          res.status(400).json({
            message: `Algo deu errado.`
          })
      }
    });

    app.get('/tarefas', (req, res) => {
      
    })
  }
}

export default TarefaController