/* Crie uma função que recebe 2 parâmetros: a idade do usuário e a idade em que é permitido beber em algum país. Essa função deve retornar o texto "você pode beber" caso a idade do usuário seja maior ou igual a estabelecida para consumo de bebidas alcoólicas no país e "você não pode beber" caso contrário. Utilize document.write para escrever na tela o resultado desta função com os parâmetros à sua escolha. Teste todas as saídas possíveis */

var idade = prompt("Informe a idade");
var idadeParaBeber = prompt("Informe a idade que pode dirigir no seu país");

function possoBeber(idade, idadeParaBeber) {
  if(idade < idadeParaBeber) {
    return `Você só tem ${idade} anos, é muito novo para beber. Você precisa ter pelo menos ${idadeParaBeber} anos.`
  }
  return `Você tem ${idade}, você pode beber, só cuidado com a ressaca.`;
}

document.write(possoBeber(idade, idadeParaBeber));