let category = document.getElementById('category');
let entry = document.getElementById('entry');
let exit = document.getElementById('exit');
let convert = document.getElementById('convert');

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

// Event listener for category change
category.addEventListener('change', (event) => {
  clearForm();
  const selectedCategory = categories[event.target.value];
  if (selectedCategory) {
    entry.innerHTML = generateOptions(selectedCategory.options);

    // Event listener for entry change
    entry.addEventListener('change', () => {
      const selectedOption = entry.value;
      if (selectedCategory.exitOptions[selectedOption]) {
        exit.innerHTML = generateOptions(selectedCategory.exitOptions[selectedOption]);
      }
    });
  }
});

convert.addEventListener('click', (event) => {
  event.preventDefault();
  let value = +valueInput.value;

  if (conversions[category.value][entry.value].hasOwnProperty(exit.value)) {
    const conversionFunction = conversions[category.value][entry.value][exit.value];
    showResult(conversionFunction(value));
  }
});

function generateOptions(options) {
  return options.map(option => `<option value="${option.value}">${option.text}</option>`).join('');
}

let valueInput = document.getElementById('valueInput');

const conversions = {
  temperature: { 
    celsius: {
      fahrenheit: (value) => (value * 9 / 5) + 32,
      kelvin: (value) => value + 273.15
    },
    fahrenheit: {
      celsius: (value) => (value - 32) * 9 / 5,
      kelvin: (value) => fahrenheit['celsius'](value) + 273.15
    },
    kelvin: {
      celsius: (value) => value - 273.15,
      fahrenheit: (value) => celcius['fahrenheit'](kelvin['celcius'](value))
    },
  },
  length: {
    meter: {
      centimeter: (value) => value * 100,
      inch: (value) => value * 39.37
    },
    centimeter: {
      meter: (value) => value / 100,
      inch: (value) => value / 2.54
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
      kilogram: (value) =>  value / 453.6,
      pound: (value) => value / 453.6
    },
    pound: {
      kilogram: (value) => value / 2.205,
      gram: (value) => value  * 453.6
    }
  }
};

//Show result
let result = document.querySelector('p');

function showResult(valueResult) {
  result.innerText = `${valueResult}`;
}

//Clear Form
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