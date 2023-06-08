/* Em variaveis distintas guarde o seu nome, o número de filhos que você que ter, a cidade em que você gostaria de morar e também sua profissão desejada. Exiba na tela a seguinte frase: "A vidente prevê: {seu nome} terá {quantidade de filhos} e viverá em {cidade} trabalhando como {profissão}" */

var nome = prompt('Informe o seu nome');
var nFilhos = prompt('Informe o número de filhos que gostaria de ter');
var cidade = prompt('Informe a cidade que gostaria de morar');
var profissao = prompt('Informe a profissão que almeja');

document.write(`A vidente prevê: ${nome} terá ${nFilhos} e viverá em ${cidade} trabalhando como ${profissao}.`);