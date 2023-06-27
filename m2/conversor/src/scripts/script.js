//Seletores globais dos elementos HTML
let category = document.getElementById('category');
let entry = document.getElementById('entry');
let exit = document.getElementById('exit');
let convert = document.getElementById('convert');
let valueInput = document.getElementById('valueInput');
let result = document.querySelector('p');

//Objeto para população de entrada e saída
//Criado um objeto "categories" que contém valores de categorias, essas categorias por sua vez tem arrays e objetos dentro dela, no caso todo nó final é composto por uma array para poder ser aplciado o .map a frente. options > array com chaves e valores, exitOption > objetos com suas unidades que mais pra frente serão a de entrada > seguido de uma array com suas chaves e valores.
const categories = {
  temperature: {
    options: [
      { value: '', text: 'Escolha uma Opção' },
      { value: 'celsius', text: 'Celsius' },
      { value: 'fahrenheit', text: 'Fahrenheit' },
      { value: 'kelvin', text: 'Kelvin' }
    ],
    exitOptions: {
      celsius: [
        { value: 'fahrenheit', text: 'Fahrenheit' },
        { value: 'kelvin', text: 'Kelvin' }
      ],
      fahrenheit: [
        { value: 'celsius', text: 'Celsius' },
        { value: 'kelvin', text: 'Kelvin' }
      ],
      kelvin: [
        { value: 'celsius', text: 'Celsius' },
        { value: 'fahrenheit', text: 'Fahrenheit' }
      ]
    }
  },
  length: {
    options: [
      { value: '', text: 'Escolha uma opção' },
      { value: 'meter', text: 'Metro' },
      { value: 'centimeter', text: 'Centrimetro' },
      { value: 'inch', text: 'Polegada' }
    ],
    exitOptions: {
      meter: [
        { value: 'centimeter', text: 'Centimetro' },
        { value: 'inch', text: 'Polegada' }
      ],
      centimeter: [
        { value: 'meter', text: 'Metro' },
        { value: 'inch', text: 'Polegada' }
      ],
      inch: [
        { value: 'centimeter', text: 'Centimetro' },
        { value: 'meter', text: 'Metro' }
      ]
    }
  },
  weight: {
    options: [
      { value: '', text: 'Escolha uma opção' },
      { value: 'kilogram', text: 'Quilograma' },
      { value: 'gram', text: 'Grama' },
      { value: 'pound', text: 'Libra' }
    ],
    exitOptions: {
      kilogram: [
        { value: 'gram', text: 'Grama' },
        { value: 'pound', text: 'Libra' }
      ],
      gram: [
        { value: 'pound', text: 'Libra' },
        { value: 'kilogram', text: 'Quilograma' }
      ],
      pound: [
        { value: 'kilogram', text: 'Quilograma' },
        { value: 'gram', text: 'Grama' }
      ]
    }
  }
};

//Função de gerar as opções
//Essa função ela é responsável por gerar as <options> definidas nas arrays do objeto "categories", de forma bem simples ela recebe como argumento um conjunto de opções, no caso pode ser "options" ou "exitOptions", essas opcções serão rodadas o map trazendo pra gente uma varredura completa nessa array e colocando pra mim os valores de option.value e option.text nos seus respectivos lugares formando as opções dos selcts. Ela servirá tanto para ser coloca para entrada como a saida também.
function generateOptions(options) {
  return options.map(option => `<option value="${option.value}">${option.text}</option>`);
}

// Aqui temos o primeiro dos eventos de escuta com o "change", a primeira coisa que é feita é ser rodado a função clearForm() que será explicado mais a fundo depois. Nesse trecho passamos um evento com parametro, no caso é o próprio evento "change", pegamos o target dele, que é a própria box select e retiramos o valor dela naquele momento passando para uma variável, verifica se temos um valores, esperando que retorne true, e populamos o primeiro select de entrada com a função "generateOption" passando selectedCategory.Options como argumento, ou seja, as opções referente ao opbjeto acima já filtrando as opções de entrada com a categoria escolhida e devolvendo pra mim somente o que eu espero.
category.addEventListener('change', (event) => {
  clearForm();
  const selectedCategory = categories[event.target.value];
  if (selectedCategory) {
    entry.innerHTML = generateOptions(selectedCategory.options);


    //Segundo evento, agora vamos verificar a nossa caixinha de entrada para conseguir popular a nossa caixa de saída e assim evitar que tenhamos valores repetidos.
    //Criado mais um evento de "change" em nessa vez em entry que é o select de entrada. Após guarda-se o valor que está dentro desse select.
    //Verifica-se se esse valor realmente existe evitando bugs com esse if, se tiver algo == true;
    //Caso passe, ele populará o select de saída mais uma vez com a função "generateOptions" e dessa vez passando a categoria selecionada com o "selectCategory" acessando o obejto que contém as opçõs de saída e acessando mais uma vez o valor que temos no select de entrada buscando pelo array para popular nosso select de saida. ex: categoria['meter'].exitOptions['centimeter'];
    entry.addEventListener('change', () => {
      const selectedOption = entry.value;
      if (selectedCategory.exitOptions[selectedOption]) {
        exit.innerHTML = generateOptions(selectedCategory.exitOptions[selectedOption]);
      }
    });
  }
});

//Funções de conversão
//Esse é mais um objeto que guarda todas as informações de conversões necessárias, ele é divído em categorias, unidades de entrada e unidades de saída que é aonde irá puxar os resultados de acordo com as escolhas na página. Alguns valores que forá utilizado o toFixed tornou-se necessário transformar em number com o "+" para ser reutilizado dentro de alguns funções posteriormente.
/* Ex: Usuário escolhe temperatura > conversions['temperature'] 
       usuário escolhe celsius como entrada > conversions['temperature']['celsius']
       usuário escolhe fahrenheit como saida > conversions['temperature']['celsius']['fahrenheit']
       conversions['temperature']['celsius']['fahrenheit'] = (value) => (value * 9 / 5) + 32
       (value) => (value * 9 / 5) + 32 recebe o valor como parametro e já retorna essa conta feita.
       ps: utilizado conceitos de arrow function single line, nesse caso é dispensável o uso de return.
*/
const conversions = {
  temperature: { 
    celsius: {
      fahrenheit: (value) => (value * 9 / 5) + 32,
      kelvin: (value) => value + 273.15
    },
    fahrenheit: {
      celsius: (value) => +((value - 32) * 5 / 9).toFixed(2),
      kelvin: (value) => +(conversions['temperature']['fahrenheit']['celsius'](value) + 273.15).toFixed(2)
    },
    kelvin: {
      celsius: (value) => value - 273.15,
      fahrenheit: (value) => (conversions['temperature']['celsius']['fahrenheit'](conversions['temperature']['kelvin']['celsius'](value))).toFixed(2)
    },
  },
  length: {
    meter: {
      centimeter: (value) => value * 100,
      inch: (value) => (value * 39.37).toFixed(2)
    },
    centimeter: {
      meter: (value) => value / 100,
      inch: (value) => (value / 2.54).toFixed(6)
    },
    inch: {
      centimeter: (value) => value * 2.54,
      meter: (value) => value / 39.37
    },
  },
  weight: {
    kilogram: {
      gram: (value) => value * 1000,
      pound: (value) => value * 2.205
    },
    gram: {
      kilogram: (value) =>  value / 1000,
      pound: (value) => (value / 453.6).toFixed(6)
    },
    pound: {
      kilogram: (value) => (value / 2.205).toFixed(6),
      gram: (value) => value  * 453.6
    }
  }
};

//Botão convert e como chamar as funções
//Esse é o evento de click no botão em sí, ele é o responsável por saber como chamar qual função de acordo com as escolhas. A primeira coisa que temos é o tipo do evento e nesse evento de click foi colcoado para previnir o padrão para esse botão ao clique que é tentar mudar de página, recarregar etc..
//Depois foi pego o valor que temos na caixa que entramos com o valor para ser convertido e é transformado esse valor em número com o "+" na frente desse valueInput.value já que ele vem de um prompt de texto.
//Após, realizado uma verificação para fins de tratamento de erro que se na categoria>valorEntrada.tem(saida) se retornar true segue adiante;
//A constante recebe valores do objeto de conversao passando a dados dessa forma: objetoConversao[categoria][entrada][saida] buscando no objeto o que precisa ser convertido, depois é chamado a função showResult() que será explicada mais abaixo e se passa o conversionFunction passando o valor coletado como argumento.
convert.addEventListener('click', (event) => {
  event.preventDefault();
  verifyInput();
  if(valueInput.value != '') {
    if (conversions[category.value][entry.value].hasOwnProperty(exit.value)) {
        let value = +valueInput.value;
        const conversionFunction = conversions[category.value][entry.value][exit.value];
        showResult(conversionFunction(value));
      }
  }
});

//Função para exibir o resultado
//Função que recebe como argumento o resultado e joga no único "p" da página o resultado que temos.
function showResult(valueResult) {
  result.innerText = `${valueResult}`;
}

//Limpar formulários
//Essa função ela foi pensada em várias etapas. A primeira foi de que ao mudar a categoria, ela já irá zerar o resutado que temos, assim como o valor de entrada e voltar o padrão do começo com a unidade de saída, nesse mesmo evento de mudança verica-se se o categoria está com o valor vazio, como ele iniciou e caso seja true ele também limpa o valor de entrada.
//A segunda etapa ela verifica o valor de entrada, com um evento de mudança, ao ser mudado ele já zera o resultado, esperando-se que o usuário queira um novo resultado para ação que irá realizar. Caso escolha a opção vazia ele zera também a parte de saída
//Terceira e ultima parte, evento de mudança no select de saída, caso ele muda e saída ele zera o resutlado.
function clearForm() {
  category.addEventListener('change', () => {
    result.innerText = '';
    exit.innerHTML = `
      <option value="">---</option>
    `
    valueInput.value = '';
    if(category.value === '') 
      entry.innerHTML = `
        <option value="">---</option>
      `
  });
  entry.addEventListener('change', () => {
    result.innerText = '';
    if(entry.value === '')
      exit.innerHTML = `
      <option value="">---</option>
    `
  });
  exit.addEventListener('change', () => {
    result.innerText = '';
  });
}

//Verifica valores de input para não deixa-los vazios ao tentar converter o valor ele alerta o usuário para preencher o mesmo. A mesma coisa acontece com o resultado.
function verifyInput() {
  if(entry.value == '' || exit.value == '' ) {
    alert('Selecione todos campos.');
  }
  if(entry.value != '' && exit.value != '' && valueInput.value == '') {
    alert('Você deve preencher um valor.')
  }
}