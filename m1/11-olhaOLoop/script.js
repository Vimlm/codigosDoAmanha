/* Criem uma função chamada listaDecrescente. Sua função deve:
○ Receber um número positivo;
○ Retornar uma string de números, em ordem decrescente, que vai do argumento fornecido a
zero;
○ Utilize “\n” na separação dos números para pular linhas.
● Criem uma função chamada fizz. Sua função deve:
○ Receber um número positivo;
○ Retornar uma string de números, em ordem crescente, na qual os números que são
múltiplos de 3 estão substituídos por fizz;
● Testem tanto a função listaDecrescente quanto fizz, com diferentes argumentos, utilizando
document.write e prompt. */

var numero = prompt('Informe um um número: ');

function listaDecrescente(numero) {
  while (numero > 0) {
    document.write(`<p>O número é: ${numero}</p>`)
    numero--;
  }
}

listaDecrescente(numero);

document.write(`<br>`);

//Cria um inicializador
var inicializador = 0;

//Cria a função fizz que verifica se até o "número" forncedio quais são os divisíveis por 3, é passado número como parâmetro
function fizz(numero) {
  //Inicia um loop for que tem sua condição "inicializador" (que é 0) é menor que "número" que é o número fornecido (que foi coletado do prompt)
  while (inicializador < numero) {
    //Aqui fazemos uma verificação de se o inicializador é divisivel por 3, utilizamos ele porque ele que vai de 0 até o número passando por todos os números, a expressão utlizando % 3 é como se a gente falasse "o resto de divisão de inicializador divididos por 3 é 0" ou seja, pesquisamos essa condição verdadeira para trocar o número por fiz.
    if(inicializador % 3 == 0) {
      //se for verdadeiro ou seja, se o inicializador é divisivel por 3 (inicializador é trocado por fizz)
      document.write(`<p>O núemro é fizz</p>`);
    } else {
      //se não ele entra na condição falsa e ele vai printar o número de inicialiador.
      document.write(`<p>O número é: ${inicializador}</p>`);
    }
    //Aqui temos a condição e dessa vez por incremento.
    inicializador++;
  }
}
//Chamamos a função passando número como argumento para ela rodar no nosso programa.
fizz(numero);