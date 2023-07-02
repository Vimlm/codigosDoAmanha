const buscarCep = document.querySelector('button');

buscarCep.addEventListener('click', (event) => {
  event.preventDefault();
  const cep = +document.querySelector('input').value;
  console.log(cep);
  let dados = reqCep(cep);
  console.log(dados);
});


function reqCep(cep) {
  const req = new XMLHttpRequest();

  req.open('GET', `https://viacep.com.br/ws/${cep}/json/`);

  req.onreadystatechange('')

  req.onload = () => {
    if(req.status === 200) {
      return dados = JSON.parse(req.response);
    } else if(req.status === 400) {
      throw new Error('Deu ruim parceiro');
    }
  };
  req.send();
}