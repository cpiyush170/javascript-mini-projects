const btn = document.getElementById('btn')
const color = document.querySelector('.color')


// rgb color generator
function randomColor(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`
}

btn.addEventListener('click', () => {
  let red = Math.floor(Math.random() * 100)
  let green = Math.floor(Math.random() * 200)
  let blue = Math.floor(Math.random() * 255)

  let myColor = randomColor(red, green, blue)
  document.body.style.backgroundColor = myColor
  console.log(myColor)
  color.textContent = myColor
})