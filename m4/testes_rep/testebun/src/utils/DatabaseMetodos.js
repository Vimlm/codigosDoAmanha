import database from "../database/Database.js";

class DatabaseMetodos {
  //Inserir dados - Verbo Post - Create
  static adicionarTarefa(tarefa) {
    database.tarefas.push(tarefa)
  }

  //Buscar dados - Verbo Get - Read
  static buscarTarefas(tarefas) {
    tarefas.forEach(tarefa => {
      
    } }
  //Editar dados - Verbo Put ou Patch - Update
  //Deletar Dados - Verbo Delete - Delete
}

export default DatabaseMetodos