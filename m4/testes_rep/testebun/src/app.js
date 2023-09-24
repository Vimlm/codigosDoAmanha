import express from "express";
import TarefaController from "./controller/TarefaController.js";

const app = express();

const port = process.env.PORT | 3333;

app.listen(port, () => {
  console.log(`Application is running on port ${port} 🚀`)
});

app.use(express.json());

TarefaController.rotas(app);