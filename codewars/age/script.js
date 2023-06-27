function peopleWithAgeDrink(old) {
  var drink = old < 14 ? "drink toddy" : old < 18 ? "drink coke" :  old < 21 ? "drink beer" : "drink whisky"
  return drink;
}

function removeChar(str) {
  str.slice(0, (str.lenght - 1));
}

console.log(removeChar('eloquente'));