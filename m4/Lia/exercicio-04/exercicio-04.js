import express from 'express'

const app = express();

const usuarios = [
  {
    id: 1,
    nome: "victor"
  },
  {
    id: 2,
    nome: 'matheus'
  },
  {
    id: 3,
    nome: 'lucas'
  },
  {
    id: 4,
    nome: 'martins'
  }

]

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/', (req, res) => {
  res.json('nome: victor');
});

app.listen(3000, () => {
  console.log('App Listen on Port 3000');
});