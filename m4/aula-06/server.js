import express from "express";
import Usuario from "./controller/Usuario.js";

const app = express();
const port = process.env.PORT | 8888

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});

Usuario.rotas(app);