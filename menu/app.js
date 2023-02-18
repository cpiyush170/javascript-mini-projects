let menuData = [
  {
    name: 'Bacon Sandwich',
    type: 'breakfast',
    price: '$15.99',
    description: 'Lightly pan-toasted bread, crispy slices of bacon, sweet caramelized onions, smoky chipotle mayo, thin slices of tomatoes, and a little arugula come together to make one irresistible sandwich.',
    imgSrc: './images/item-7.jpeg'
  },
  {
    name: 'Diner Double',
    type: 'lunch',
    price: '$13.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-2.jpeg'
  },
  {
    name: 'Pancake With Sliced Strawberry',
    type: 'breakfast',
    price: '$25.99',
    description: 'These strawberry pancakes are light, fluffy, and packed with flavor. The vanilla makes this breakfast seem like dessert! Serve with butter and real maple syrup. They makes everyone and anyone feel special.',
    imgSrc: './images/item-1.jpeg'
  },
  {
    name: 'Country Delight',
    type: 'breakfast',
    price: '$20.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-4.jpeg'
  },
  {
    name: 'Egg Attack',
    type: 'lunch',
    price: '$22.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-5.jpeg'
  },
  {
    name: 'Oreo Dream',
    type: 'shakes',
    price: '$18.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-6.jpeg'
  },
  {
    name: 'American Classic',
    type: 'lunch',
    price: '$12.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-8.jpeg'
  },
  {
    name: 'Quarantine Buddy',
    type: 'shakes',
    price: '$16.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-9.jpeg'
  },
  {
    name: 'Steak Dinner',
    type: 'dinner',
    price: '$39.99',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at quo, esse enim, inventore nihil ad totam odio deserunt a quis provident quia quisquam iure nostrum!',
    imgSrc: './images/item-10.jpeg'
  },
  
]


let menu = document.querySelector('.menu')



// menuData.forEach(function (item) {
  
//   let menuItem = document.createElement('div')
//   menuItem.classList.add('menu-item')
//   menu.appendChild(menuItem)

//   let menuImg = document.createElement('div')
//   menuImg.classList.add('menu-img')
//   menuItem.appendChild(menuImg)
//   let Img = document.createElement('img')
//   menuImg.appendChild(Img)

//   let menuInfo = document.createElement('div');
//   menuInfo.classList.add('menu-info')
//   menuItem.appendChild(menuInfo)
//   let menuTitle = document.createElement('div')
//   menuTitle.classList.add('menu-title')
//   menuInfo.appendChild(menuTitle)
  
//   let name = document.createElement('p')
//   let price = document.createElement('p')
//   menuTitle.appendChild(name)
//   menuTitle.appendChild(price)
//   let underline = document.createElement('hr')
//   menuInfo.appendChild(underline)

//   let menuDescription = document.createElement('div')
//   menuDescription.classList.add('menu-description')
//   menuInfo.appendChild(menuDescription)

//   let description = document.createElement('p')
//   menuDescription.appendChild(description)

//   // data
//   Img.src = item.imgSrc
//   name.innerText = item.name
//   price.innerText = item.price
//   description.innerText = item.description
// })


let categories = document.querySelector('.categories')

categories.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.classList.contains('breakfast')) {
    let result = menuData.filter(item => item.type === 'breakfast')
    renderData(result)
  }
  else if (e.target.classList.contains('lunch')) {
    let result = menuData.filter(item => item.type === 'lunch')
    renderData(result)
  }
  else if (e.target.classList.contains('shakes')) {
    let result = menuData.filter(item => item.type === 'shakes')
    renderData(result)
  }
  else if (e.target.classList.contains('dinner')) {
    let result = menuData.filter(item => item.type === 'dinner')
    renderData(result)
  }
  else {
    renderData(menuData)
  }
  
})

window.addEventListener('DOMContentLoaded', () => {
  renderData(menuData)
})


function renderData(filteredData) {
  let displayMenu = filteredData.map(function (item) {
    return ` <div class="menu-item">
    <div class="menu-img">
      <img src=${item.imgSrc} alt=${item.name}>
    </div>
    <div class="menu-info">
    <div class="menu-title">
      <p>${item.name}</p>
      <p>${item.price}</p>
    </div>
    <hr>
    <div class="menu-description">
      <p>${item.description}</p>
    </div>
  </div>
  </div>`
  })
  displayMenu = displayMenu.join('')
  menu.innerHTML = displayMenu;
}


// function createDOMElements(item) {
//   let menuItem = document.createElement('div')
//   menuItem.classList.add('menu-item')
//   menu.appendChild(menuItem)

//   let menuImg = document.createElement('div')
//   menuImg.classList.add('menu-img')
//   menuItem.appendChild(menuImg)
//   let Img = document.createElement('img')
//   menuImg.appendChild(Img)

//   let menuInfo = document.createElement('div');
//   menuInfo.classList.add('menu-info')
//   menuItem.appendChild(menuInfo)
//   let menuTitle = document.createElement('div')
//   menuTitle.classList.add('menu-title')
//   menuInfo.appendChild(menuTitle)
  
//   let name = document.createElement('p')
//   let price = document.createElement('p')
//   menuTitle.appendChild(name)
//   menuTitle.appendChild(price)
//   let underline = document.createElement('hr')
//   menuInfo.appendChild(underline)

//   let menuDescription = document.createElement('div')
//   menuDescription.classList.add('menu-description')
//   menuInfo.appendChild(menuDescription)

//   let description = document.createElement('p')
//   menuDescription.appendChild(description)

//   // data
//   Img.src = item.imgSrc
//   name.innerHTML = item.name
//   price.innerHTML = item.price
//   description.innerHTML = item.description
// }