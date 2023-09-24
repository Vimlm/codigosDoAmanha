import express from 'express';
import UsuarioController from './controller/Usuarios.js';
import TaskController from './controller/Task.js';
import Home from './routes/home.js';

const app = express();
const port = process.env.PORT | 8888

app.listen(port, () => {
  console.log(`App running on port ${port} 🚀`);
});

UsuarioController.rotas(app);
TaskController.rotas(app);
Home.rotas(app);