import express from 'express';
import UsuarioController from './controller/UsuariosController.js';

const app = express();
const port = process.env.PORT | 8888; 

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`)
});

app.use(express.json());

UsuarioController.rotas(app)