//Atividade 1: Lista com nomes dos integrantes do time.
/*
Utilizando seus conhecimentos de programação funcional, componha as funções necessárias (filter, map, reduce, forEach) para que a lista com arrays de nomes e título de pessoas do time se transforme na lista abaixo:*/

const time = [
  ["Sra.", "Paula", "Albuquerque"],
  ["Sr.", "Kelwin", "Nascimento"],
  ["Sra.", "Gabriella", "Dias", "Cruz"]
];

const novoTime = time.map((nome) => {
  return nome.join(" ");
})

console.log(novoTime)

//================================== Atividade 2 =======
const valorVendas = [
    112.46, //conta de luz
    42.89, //conta de água
    799.00, //Aluguél
    428.9 //mercado
]

const totalCaixa = valorVendas.reduce((acumulador, valorAtual) => acumulador += valorAtual, 100)

// console.log(totalCaixa);


//utilize reduce para criar um report com uma lista contendo os tipos de gastos e o total gasto. Lembre-se, é necessário retornar o acumulador para que ele possa ser utilizado novamente. A estrutura do report deve ser: {tipos, total}

const report = null;

// console.log(report);
const despesas = [
    {tipo: "Luz", valor: 112.46},
    {tipo: "Água", valor: 42.89}, 
    {tipo: "Aluguel", valor: 799.00},
    {tipo: "Mercado", valor: 428.9}
];

valores = [];
tipos = [];
valoresTipos = [];

const despesasTotais = despesas.map(gastos => {
  valores.push(gastos.valor);
  tipos.push(gastos.tipo);
});

const valorTotal = valores.reduce((acc, cur) => acc += cur);

valoresTipos.push(tipos);
valoresTipos.push(valorTotal);

console.log(valoresTipos)