const url = 'https://hp-api.onrender.com/api/characters'
const picture = document.querySelector('.picture')

async function buscarPersonagensHP() {
  const resposta = await fetch(url)
  const personagens = resposta.json()
  return personagens
}

async function gerarPersonagemAleatorio() {
  const personagens = await buscarPersonagensHP()
  let random = Math.floor((Math.random() * 401) + 1);
  return await personagens[random]
}

function imprimiPersoangem(personagem) {
  const picture = document.querySelector('.picture')
  const nome = document.querySelector('.nome')

  nome.innerText = personagem.name
  picture.setAttribute('src', personagem.image)
}

const gerarBtn = document.getElementById('gerarPersonagem')

gerarBtn.addEventListener('click', async () => {
  const personagem = await gerarPersonagemAleatorio()
  imprimiPersoangem(personagem)
})

