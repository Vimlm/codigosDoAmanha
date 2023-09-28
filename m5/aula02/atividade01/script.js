/* EXERCICIO 1 */
const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel']

const [ alice, gabriela, joao, francisco, natalia, giovana, gabriel ] = alunos

/* EXERCICIO 2 */
const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia']

const [ matematica, fisica, , lp, biologia ] = disciplinas

/* EXERCICIO 3 */
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca', 
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}

const { nome, idade, endereco: { logradouro, numero, bairro, cidade }, assinanteDesde: assinante } = dadosCliente

/* EXERCICIO 4 */
const vestimenta = {
    camisa: {
        listrada: true,
        cor: 'Vermelha e branca',
        colecao: 'Outono/Inverno 2019'
    },
    calca: {
        cor: 'Azul escuro',
        colecao: 'Primavera/Verão 2021'
    }
}

const { camisa: { listrada, cor: corCamisa, colecao: colecaoCamisa }, calca: { cor: corCalca, colecao: colecaoCalca  }} = vestimenta
