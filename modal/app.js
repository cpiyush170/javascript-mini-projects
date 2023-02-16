let openBtn = document.querySelector('.modal-btn')
let closeBtn = document.querySelector('.close-btn')
let div = document.querySelector('.modal-overlay')

openBtn.addEventListener('click', () => {
  div.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
  div.classList.remove('open-modal')
})