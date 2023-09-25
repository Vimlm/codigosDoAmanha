const randomUserUrl = 'https://randomuser.me/api/';

const img = document.getElementById('userPhoto')
const paragrafo = document.getElementById('name')

async function buscarUsuario() {
  const response = await fetch(randomUserUrl)
  const responseJson = await response.json()
  return user = responseJson.results[0]
}

async function gerarUsuario() {
  const user = await buscarUsuario()
  const fullName = `${user.name.first} ${user.name.last}`
  paragrafo.innerText = fullName
  
  const picture = user.picture.large
  img.setAttribute("src", picture)
}


document.getElementById('changeUser').addEventListener('click', gerarUsuario)