const paragrafros = document.querySelectorAll('p')
const [p1, p2, p3] = paragrafros

console.log(p1)

function alteraFont() {
  return (tamanho) => {
    document.body.style.fontSize = tamanho
  }
}

const altera16 = alteraFont()
const altera24 = alteraFont()
const altera32 = alteraFont()

p1.addEventListener("click", () => {
  altera16("1rem")
})
p2.addEventListener("click", () => {
  altera24("1.5rem")
})
p3.addEventListener("click", () => {
  altera32("2rem")
})