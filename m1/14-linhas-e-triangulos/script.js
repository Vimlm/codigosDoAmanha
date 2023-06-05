/* Em uma nova pasta, utilizando arquivos HTML e JavaScript, desenvolvam um programa que:
⇨ Implemente a função linhaAsterisco. Essa função:
◼ Recebe um número;
◼ Retorna uma string com a quantidade de asteriscos igual ao argumento passado.
⇨ Teste a função linhaAsterisco com diferentes argumentos utilizando a página HTML;
⇨ Implemente a função trianguloAsterisco. Essa função:
◼ Recebe um número (n);
◼ Retorna um triângulo de asteriscos com o mesmo número de linhas que o argumento
passado (n), um asterisco na primeira linha e n asteriscos na última linha.
⇨ Teste a função trianguloAsterisco com diferentes argumentos utilizando a página HTML. */

var n = prompt("Informe a quantidade de número: ");

function linhaAsterisco(n) {
  for(var i = 1; i <= n; i++) {
    return'*'.repeat(n);
  }
}

console.log(linhaAsterisco(n));

function trianguloAsterisco(n) {
  var triangulo = '';
  for(var i = 1; i <= n; i++) {
    triangulo += linhaAsterisco(i) + '\n';
  }
  return triangulo;
}

console.log(trianguloAsterisco(n));

function piramideAsterisco(n) {
  // inicia o piramide vazio
  var piramide = '';
  for(var j = 1; j < n; j++) {
    //espaço pega o valor de n que foi passado (10) e tira valor de j (1)
    var espaco = ' '.repeat(n - j);
    // console.log(espaco);
    if(j == 1) {
      //tem que começar com 1 asterísco na primeira iteração
      var linha = espaco + linhaAsterisco(j) + '\n';
    } else if (j == 2) {
      //a segunda iteração você precisa de j = 2 + 1 
      var linha = espaco + linhaAsterisco(j + 1) + '\n';
    } else {
      //a terceira iteração em diante sempre * 2, j = 3 * 2, j = 4 * 2...
      var linha = espaco + linhaAsterisco(j * 2) + '\n';
    }
    piramide += linha;
  }
  console.log(piramide)
}

piramideAsterisco(n);

