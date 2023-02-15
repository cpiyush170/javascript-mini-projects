let hamburgerBtn = document.querySelector('.sidebar-toggle')
let sidebar = document.querySelector('aside')

hamburgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

let closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})