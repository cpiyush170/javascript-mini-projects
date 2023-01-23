const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


const btn = document.getElementById('btn')
const colorText = document.querySelector('.color')

btn.addEventListener('click', () => {
  let hexColor = '#'

  for (let i = 0; i < 6; i++){
    let randomNum = getRandomNum();
    hexColor = hexColor + hex[randomNum]
  }
  document.body.style.backgroundColor = hexColor
  colorText.innerText = hexColor
})

// get's random number between 0 to hex array length
function getRandomNum() {
  return Math.floor(Math.random() * hex.length)
}

