let questions = document.querySelectorAll('.question')

questions.forEach(question => {
  let btn = question.querySelector('.question-btn')
  btn.addEventListener('click', () => {

    questions.forEach(function (q) {
      if (q !== question) {
        q.classList.remove('show-text')
      }
    })
    question.classList.toggle('show-text')
  })
});