/* Faça uma função que exibe o menu de bebidas de um restaurante (utilizando document.write), com um item em cada linha: 1-Refrigerante, 2-Suco, 3-Água. Exibindo o menu e pegando a resposta do usuário: faça uma função que exibe o menu de bebidas de um restaurante (utilizando document.write), com um item em cada linha: 1- Refrigerante, 2-Suco, 3-Água. Após isso, receba a escolha do cliente (utilizando prompt) e retorne o valor/item escolhido pelo cliente. Utilize document.write para escrever na tela o resultado desta função com os parâmetros à sua escolha. Teste todas as saídas possíveis.*/

function menu() {
  var opcao = Number(prompt(`Informe a opção desejada:\n1- Refrigerante\n2- Suco\n3- Água`));
  switch (opcao) {
    case 1:
      return `O garçom já irá trazer o seu refrigerante.`;
      break;

    case 2:
      return `O garçom já irá trazer o seu suco.`;
      
      break;

    case 3:
      return `O garçom já irá trazer a sua água.`;
      break;
  
    default:
      return `Não temos isso no nosso menu.`;
      break;
  }
}

document.write(menu());