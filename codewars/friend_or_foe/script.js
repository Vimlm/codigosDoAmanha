const letters = ['a', 'b', 'c'];
console.log(letters)

for (const letter in letters) { 
  letters[letter] = `${+letter + 1}: ${letters[letter]}`;
}
console.log(letters);