//retornar string juntas e com espaço
let words = ['hello', 'world', 'this', 'is', 'great'];

console.log(words.join(' '));

//************************************************************************************

//Escreva uma função que pegue o número de pétalas de cada flor e retorne true se elas estiverem apaixonadas e false se não estiverem.
function lovefunc(flower1, flower2) {
  if(flower1 % 2 == 0 && flower2 % 2 == 1) {
    return true;
  } else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function lovefuncA(flower1, flower2) {
  //Aqui ele testa se a soma dos 1 e 2 é impar e retorna true
  // return flower1 % 2 !== flower2 % 2;
  // return (flower1 + flower2) % 2 === 1
}

//Testes
// console.log(lovefunc(1,4)); 
// console.log(lovefunc(2,2));
// console.log(lovefunc(2,3));
// console.log(lovefunc(0,1));
// console.log(lovefunc(0,0));

//************************************************************************************

/* O ácido desoxirribonucléico, DNA, é a principal molécula de armazenamento de informações em sistemas biológicos. É composto por quatro bases de ácidos nucleicos Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina ('T').

O ácido ribonucleico, RNA, é a principal molécula mensageira nas células. O RNA difere ligeiramente do DNA em sua estrutura química e não contém timina. No RNA, a timina é substituída por outro ácido nucléico Uracil ('U').

Crie uma função que traduza uma determinada sequência de DNA em RNA. */

function DNAtoRNA(dna) {
  if(dna.indexOf('T') == -1) {
    return dna;
  } else {
    return dna.replaceAll('T', 'U');
  }
}

//solução melhores práticas utilizando regex.
function DNAtoRNA2(dna) {
  return dna.replace(/T/g, 'U');
}
//Testes

// console.log(DNAtoRNA2("TTTT")); //"UUUU"
// console.log(DNAtoRNA2("GCAT")); //"GCAU"
// console.log(DNAtoRNA2("GACCGCCGCC")); //"GACCGCCGCC"

//************************************************************************************

/* Escreva a função bmi que calcula o índice de massa corporal (bmi = peso / altura 2 ).

se bmi <= 18,5 retorne "Abaixo do peso"

se bmi <= 25,0 retorne "Normal"

se bmi <= 30,0 retorne "Excesso de peso"

se IMC > 30 retorne "Obeso" */

function bmi(weight, height) {
  let bmi = weight / (height * height)
  console.log(bmi);
  if(bmi <= 18.5) {
    return  'Underweight'
  } else if ( bmi <= 25) {
    return 'Normal'
  } else if (bmi <= 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

//Solução com ternário
function bmi2(weight, height) {
  
  var bmi  = weight/(height*height);
  
   return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
  
  }

//Testes
// console.log(bmi(80, 1.80)) //"Normal"