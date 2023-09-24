import express from 'express';

const app = express();

const nome = 'Victor';

const usuarios = [
  {
    id: 1,
    nome: 'Victor'
  },
  {
    id: 2,
    nome: 'Matheus'
  },
  {
    id: 3,
    nome: 'Lucas'
  },
  {
    id: 4,
    nome: 'Martins'
  }
];

app.get('/', (req, res) => {
  res.send(`<a href='http://127.0.0.1:5500/formulario.html'>Página Login</a>`)
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  res.json(usuarios[req.params.id - 1]);
});


app.listen(3000, () => {
  console.log('App listen on port 3000');
});