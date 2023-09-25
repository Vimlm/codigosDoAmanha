const div = document.getElementById("div")

// console.log(div)

//Criar uma string
const conteudo = "Esse é um texto que foi criado via JavaScript"

//Criar elemento(tag) HTML
const tag = document.createElement("h2");

//Jogar String no Elemento HTML
tag.innerHTML = conteudo

//Jogar Elemento HTML na Div
div.appendChild(tag); 







// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(response => response.json())
//   .then(json => console.log(json))