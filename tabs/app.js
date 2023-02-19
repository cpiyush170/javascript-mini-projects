const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
  
  let id = e.target.dataset.id

  if(id)
  {
    btns.forEach(btn => {
      btn.classList.remove('active')
      e.target.classList.add('active')
    })
    articles.forEach(article => {
      article.classList.remove('active')
    })
    // get article by id and add active class on it
    const el = document.getElementById(id)
    el.classList.add('active')
  }
})
