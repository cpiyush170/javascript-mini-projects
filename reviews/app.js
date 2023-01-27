// dummy data 

let reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    profession: 'UX Designer',
    img: './images/img1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    id: 2,
    name: 'Anna Johnson',
    profession: 'Graphic Designer',
    img: './images/img2.jpg',
    desc: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo'
  },
  {
    id: 3,
    name: 'Alice Kytes',
    profession: 'HR Manager',
    img: './images/img3.jpg',
    desc: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
  },
  {
    id: 4,
    name: 'Sophia Turner',
    profession: 'Business Executive',
    img: './images/img4.jpg',
    desc: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.'
  },
  
]

let img = document.querySelector('img')
let name = document.querySelector('#name')
let profession = document.querySelector('#profession')
let description = document.querySelector('#desc')

let arrows = document.querySelectorAll('button')

let index = 0

arrows.forEach(function (arrow) {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('right'))
    {
      if (index < reviews.length - 1) {
        index++;
        udpateDOM(index)
      }
      else {
        index = 0
        udpateDOM(index)
      }
    }
    else
    {
      if (index > 0) {
        index--;
        udpateDOM(index)
      }
      else {
        index = reviews.length - 1
        udpateDOM(index)
      }
    }
  })
})

// updates the dom elements with new content

function udpateDOM(index) {
        img.src = reviews[index].img
        name.textContent = reviews[index].name
        profession.textContent = reviews[index].profession
        description.textContent = reviews[index].desc
}






