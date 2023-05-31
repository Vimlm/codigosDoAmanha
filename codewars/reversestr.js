console.clear()
let string = "Hey fellow warriors";

let firstElement = string.split(" ").slice(0, 1)

let lastElements = string.split(" ").slice(1).join(' ').split('').reverse().join('');

let newString = `${firstElement} ${lastElements}`



console.log(newString);