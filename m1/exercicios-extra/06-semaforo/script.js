/* Faça uma função que recebe como parâmetro as strings "verde", "amarelo" ou "vermelho". Caso o parâmetro passado seja "verde", a função deve retornar "pode passar!", caso seja "amarelo", retorna "melhor freiar", caso seja "vermelhor", "pare já!". Utilize document.write para escrever na tela o resultado desta função com os parâmetros à sua escolha. Teste todas as saídas possíveis. */

var corSemaforo = prompt("Informe a cor do semáforo").toLocaleLowerCase();

function semaforo(corSemaforo) {
  switch (corSemaforo) {
    case 'verde':
      return `Pode passar!`;
      break;

    case 'amarelo':
      return `Melhor freiar!`;
      break;
    
    case 'vermelho':
      return `Pare já!!`;
      break;
  
    default:
      return `Essa não é uma opção válida.`
      break;
  }
}

document.write(semaforo(corSemaforo));