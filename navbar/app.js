let hamburgerBtn = document.querySelector('.nav-toggle')

let navbarLinks = document.querySelector('ul')

hamburgerBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('show-links')
})

