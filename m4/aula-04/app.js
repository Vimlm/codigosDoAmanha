import express from 'express';

const app = express();

const port = 8888;

app.get('/', (req, res) => {
  if(res.status === 200) {
    res.send(`
      <h1> Aplicação Funcionando </h1>
    `);
  } else {
    res.send(`
      <h1> Requisição não concluida </h1>
    `);
  }
});



app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});