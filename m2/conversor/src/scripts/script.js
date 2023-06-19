let category = document.getElementById('category');
let entry = document.getElementById('entry');
let exit = document.getElementById('exit');
let convert = document.getElementById('convert');

category.addEventListener('change', () => {
  cleanForm();
  if (category.value === 'temperature') {
    entry.innerHTML = `
      <option value="">Escolha uma opção</option>
      <option value="celsius">Celsius</option>
      <option value="fahrenheit">Fahrenheit</option>
      <option value="kelvin">Kelvin</option>
    `;
    entry.addEventListener('change', () => {
      if (entry.value == 'celsius') {
        exit.innerHTML = `
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        `;
      } else if (entry.value === 'fahrenheit') {
        exit.innerHTML = `
        <option value="celsius">Celsius</option>
        <option value="kelvin">Kelvin</option>
        `;
      } else if(entry.value === 'kelvin') {
        exit.innerHTML = `
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        `;
      }
    });
  } else if (category.value === 'length') {
    entry.innerHTML = `
      <option value="">Escolha uma opção</option>
      <option value="meter">Metros</option>
      <option value="centimeter">Centimetros</option>
      <option value="inch">Polegadas</option>
    `;
    entry.addEventListener('change', () => {
      if (entry.value == 'meter') {
        exit.innerHTML = `
        <option value="centimeter">Centimetros</option>
        <option value="inch">Polegadas</option>
        `;
      } else if (entry.value === 'centimeter') {
        exit.innerHTML = `
        <option value="meter">Metros</option>
        <option value="inch">Polegadas</option>
        `;
      } else if(entry.value === 'inch'){
        exit.innerHTML = `
        <option value="centimeter">Centimetros</option>
        <option value="meter">Metros</option>
        `;
      }
    });
  } else if (category.value === 'weight') {
    entry.innerHTML = `
      <option value="">Escolha uma opção</option>
      <option value="kilogram">Quilograma</option>
      <option value="gram">Grama</option>
      <option value="pound">Libra</option>
    `;
    entry.addEventListener('change', () => {
      if (entry.value == 'kilogram') {
        exit.innerHTML = `
        <option value="gram">Grama</option>
        <option value="pound">Libra</option>
      `;
      } else if (entry.value === 'gram') {
        exit.innerHTML = `
        <option value="pound">Libra</option>
        <option value="kilogram">Quilograma</option>
        `;
      } else if(entry.value === 'pound') {
        exit.innerHTML = `
        <option value="kilogram">Quilograma</option>
        <option value="gram">Grama</option>
        `;
      }
    });
  }
});

let valueInput = document.getElementById('valueInput');

convert.addEventListener('click', () => {
  let value = +valueInput.value;
  const conversions = {
    celsius: {
      fahrenheit: (value) => celsiusFahrenheit(value),
      kelvin: (value) => celsiusKelvin(value)
    },
    fahrenheit: {
      celsius: (value) => fahrenheitCelsius(value),
      kelvin: (value) => fahrenheitKelvin(decimalAdjust(3, value))
    },
    kelvin: {
      celsius: (value) => kelvinCelsius(decimalAdjust(2, value)),
      fahrenheit: (value) => kelvinFahrenheit(decimalAdjust(2, value))
    },
    meter: {
      centimeter: (value) => meterCentimeter(decimalAdjust(2, value)),
      inch: (value) => meterInch(decimalAdjust(4, value))
    },
    centimeter: {
      meter: (value) => centimeterMeter(decimalAdjust(2, value)),
      inch: (value) => centimeterInch(decimalAdjust(6, value))
    },
    inch: {
      centimeter: (value) => inchCentimeter(decimalAdjust(2, value)),
      meter: (value) => inchMeter(decimalAdjust(4, value))
    },
    kilogram: {
      gram: (value) => kilogramGram(decimalAdjust(4, value)),
      pound: (value) => kilogramPound(decimalAdjust(5, value))
    },
    gram: {
      kilogram: (value) => gramKilogram(decimalAdjust(4, value)),
      pound: (value) => gramPound(decimalAdjust(8, value))
    },
    pound: {
      kilogram: (value) => poundKilogram(decimalAdjust(6, value)),
      gram: (value) => poundGram(decimalAdjust(3, value))
    }
  };
  
  if (conversions[entry.value].hasOwnProperty(exit.value)) {
    const conversionFunction = conversions[entry.value][exit.value];
    showResult(conversionFunction(value));
  }
});

//temperature functions
function celsiusFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function celsiusKelvin(celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
}

function fahrenheitCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 9 / 5;
  return celsius;
}

function fahrenheitKelvin(fahrenheit) {
  let kelvin = fahrenheitCelsius(fahrenheit) + 273.15;
  return kelvin;
}

function kelvinCelsius(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius;
}

function kelvinFahrenheit(kelvin) {
  let fahrenheit = celsiusFahrenheit(kelvinCelsius(kelvin));
  return fahrenheit;
}

//lenght functions
function meterCentimeter(meter) {
  let centimeter = meter * 100;
  return centimeter;
}

function meterInch(meter) {
  let inch = meter * 39.37;
  return inch;
}

function centimeterMeter(centimeter) {
  let meter = centimeter / 100;
  return meter;
}

function centimeterInch(centimeter) {
  let inch = centimeter / 2.54;
  return inch;
}

function inchCentimeter(inch) {
  let centimeter = inch * 2.54;
  return centimeter;
}

function inchMeter(inch) {
  let meter = inch / 39.37;
  return meter;
}

//weight function
function kilogramGram(kilogram) {
  let gram = kilogram * 1000;
  return gram;
}

function kilogramPound(kilogram) {
  let pound = kilogram * 2.205;
  return pound;
}

function gramPound(gram) {
  let pound = gram / 453.6;
  return pound;
}

function gramKilogram(gram) {
  let kilogram = gram / 453.6;
  return kilogram;
}

function poundKilogram(pound) {
  let kilogram = pound / 2.205;
  return kilogram;
}

function poundGram(pound) {
  let gram = pound  * 453.6;
  return gram;
}

convert.addEventListener('click', (event) => event.preventDefault());

let result = document.querySelector('p');

function showResult(valueResult) {
  result.innerText = `${valueResult}`;
}

function cleanForm() {
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

function decimalAdjust(nr, place) {
  const og = Math.pow(10, place);
  return Math.trunc(nr * og) / og;
}
