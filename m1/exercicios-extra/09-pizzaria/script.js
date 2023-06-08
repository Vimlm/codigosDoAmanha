/* A Resilia decidiu expandir os negócios e começaremos a fazer pizzas. Para isso, precisamos implementar uma calculadora de pizzas. Nesse primeiro momento nossa calculadora deverá ser capaz de:
  1. Receber o custo da pizza produzida
  2. Receber o valor pelo qual a pizza é vendida
  3. Receber o nome da pizza que está sendo vendida
  4. Calcular o imposto (8,9%) do valor da pizza vendida
  5. Calcular o lucro líquido obtido pela Pizzaria Resilia
  6. Exibir na tela a mensagem: Para a pizza {nome da pizza} o lucro líquido é de R$ {valor do lucro} e o imposto é de {valor do imposto} */

  function custoPizza() {
    return Number(prompt('Informe o valor da pizza produzida'));
  }
  
  function valorVenda() {
    return Number(prompt('Informe o valor de venda da pizza'));
  }
  
  function nomePizza() {
    return prompt('Informe o nome da pizza');
  }
  
  function iR(valorVenda) {
    return valorVenda * 0.089;
  }
  
  function liquido(custoPizza, valorVenda, iR) {
    return valorVenda - custoPizza - iR;
  }
  
  var custoPizza = custoPizza();
  var valorVenda = valorVenda();
  var nomePizza = nomePizza();
  var iR = iR(valorVenda);
  var liquido = liquido(custoPizza, valorVenda, iR);
  
  function exibir() {
    document.write(`Para a pizza ${nomePizza}, o custo de produção é R$ ${custoPizza}, o lucro líquido é de R$ ${liquido} e o valor do imposto é de ${iR}`);
  }
  
  exibir();