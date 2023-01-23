const colors = ['red', 'green', 'yellow', 'dodgerblue', 'pink', 'orange']


const btn = document.getElementById('btn')
const colorText = document.querySelector('.color')

btn.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[randomNum]
  colorText.innerText = colors[randomNum]
})

