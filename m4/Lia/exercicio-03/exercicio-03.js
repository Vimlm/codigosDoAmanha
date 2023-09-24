import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('Olá Mundo');
});

app.listen(3000, () => {
  console.log('App Listen on Port 3000');
});