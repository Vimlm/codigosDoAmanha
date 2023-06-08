/* Crie uma função que recebe 2 parâmetros: a idade do usuário e a idade em que é permitido dirigir em algum país. Essa função deve retornar o texto "você pode dirigir" caso a idade do usuário seja maior ou igual a estabelecida para direção no país e "você não pode dirigir" caso contrário. Utilize document.write para escrever na tela o resultado desta função com os parâmetros à sua escolha. Teste todas as saídas
possíveis. */

var idade = prompt("Informe a idade");
var idadeParaDigirir = prompt("Informe a idade que pode dirigir no seu país");

function possoDirigir(idade, idadeParaDigirir) {
  if(idade < idadeParaDigirir) {
    return `Você só tem ${idade}, é muito novo para dirigir. Você precisa ter pelo menos ${idadeParaDigirir} anos.`
  }
  return `Você tem ${idade}, logo tem a idade necessária para dirigir que é ${idadeParaDigirir} anos ou mais.`;
}

document.write(possoDirigir(idade, idadeParaDigirir));