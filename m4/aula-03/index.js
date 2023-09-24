/* Com o node:
- Utilizando o npm, instale o pacote node-fetch;
- Crie uma função chamada "geraUsuarios" que recebe como parâmetro o número de usuários que devem ser gerados;
. a função "geraUsuarios" deve fazer uma requisição ao random user API
utilizando o node-fetch (importado);
- O número de usuários deve ser incluído na URL;
§ Com a resolução da promessa (then) verifique se a requisição foi bem
sucedida e transforme os dados em JSON;
[)
Com a resolução do parsing (transformação para objeto) imprima na tela o primeiro e último nome de todos os usuários em verde (then). */

const url = 'https://randomuser.me/api/';

async function geraUsuario(numeroUsuario) {
  for(let i = 0; i < numeroUsuario; i++) {

    const response = await fetch(`${url}?result=${numeroUsuario}`);
    if(response.ok) {
      const data = await response.json();
      
      const nomeComplemeto = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
  
      console.log(nomeComplemeto);
    }
  }
}

geraUsuario(100);


