/* EXERCICIO 1 */
const nomes = ['Gabriela', 'Junior', 'Luciana', 'Caroline', 'Lucas']

// adicione um nome ao final da lista de nome
const nomeVictor = "Vitinho"
nomes.push(nomeVictor)
// exiba a lista modificada
console.log('adição ao final:\n', nomes)

// retire esse nome do fim da lista
nomes.pop()
// exiba a lista modificada
console.log('retirada do final:\n', nomes)

// adicione um nome no início da lista
nomes.unshift(nomeVictor)
// exiba a lista modificada
console.log('inserção ao início:\n', nomes)

// retire esse nome do início da lista
nomes.shift(nomeVictor)
// exiba a lista modificada
console.log('retirada do início:\n', nomes)

// exiba o indice do nome 'Luciana'
console.log(nomes.indexOf('Luciana'))

/* EXERCICIO 2 */

/*
o array abaixo armazena clientes, seus nomes e situação para
solicitação de emprestimo estão representados nas propriedades
*/
const clientes = [
  {
    nome: 'Felipe',
    apto: true
  },
  {
    nome: 'Eliane',
    apto: false
  },
  {
    nome: 'Jane',
    apto: false
  },
  {
    nome: 'Luiz',
    apto: true
  }
]

// Filtre apenas os clientes aptos para solicitar emprestimo
const clientesApto = clientes.filter(cliente => cliente.apto == true)
console.log(clientesApto)

/*
Para aqueles não aptos, adicione uma propriedade verificacao
para o time de dados verificar o por quê desses clientes não
estarem aptos para solicitar emprestimo
*/
const clientesInapto = clientes.filter(cliente => cliente.apto == false)
clientesInapto.map(cliente => {
  cliente.vericacao = true
})

console.log(clientesInapto)

// ex.: { nome: 'Eliane', apto: false, verificacao: true }

/* EXERCICIO 3 */
/*
Nesse exercicio temos um numero desconhecido de nomes que será passado via argumentos, o que precisamos fazer com o parâmetro nomes?
*/
function exibeNomes(...nomes) {
  nomes.forEach((nome, index) => {
    console.log(`nome ${index + 1} ${nome}`)
  })
}

exibeNomes('Pedro', 'Alberto', 'Victor', 'Emerson', 'Erica')

const numeros = [6, 24, 256, 47, 12, 450]
console.log(Math.max(...numeros))
/*
como poderiamos descobrir o maior numero sem usar nenhum loop?
Dica: use o método max (Math.max)
*/

/* EXERCICIO 4 */
// faça um clone do objeto cafe
const cafe = {
  origem: 'Cerrado brasileiro',
  torra: 'media',
  moagem: 'media fina'
}

const clone = {...cafe}

cafe.torra = 'clara'

console.log(clone)

console.log(cafe)

// ao exibir clone, torra deve ser 'media' e não 'clara', o que evidencia que foi, de fato, clonado
// console.log(clone)

/* EXERCICIO 5 */
// transforme a função comum em uma arrow function
const multiplicacao = (n1, n2, ...numeros) => {
  let acimaDeDois = 1
  if(numeros.length > 0) {
    acimaDeDois = numeros.reduce((acc, atual) => acc * atual)
  }
  return n1 * n2 * acimaDeDois
}

console.log(multiplicacao(1,2,3,4,5)) // retorna 120