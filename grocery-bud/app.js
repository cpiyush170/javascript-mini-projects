let form = document.querySelector('.grocery-form')
let alert = document.querySelector('.alert')
let grocery = document.getElementById('grocery')
let submitBtn = document.querySelector('.submit-btn')
let container = document.querySelector('.grocery-container')
let list = document.querySelector('.grocery-list')
let clearBtn = document.querySelector('.clear-btn')


let editElement;
let editFlag = false;
let editID = ''


// to add item
form.addEventListener('submit', addItem)
// to clear all items from list
clearBtn.addEventListener('click', clearItems)

window.addEventListener('DOMContentLoaded', setupItems)

function addItem(e) {
  e.preventDefault()
  let value = grocery.value
  let id = new Date().getTime().toString()

  if (value && !editFlag) {
    // create dom element for every new element
    createListItem(id, value)
    container.classList.add('show-container')
    displayAlert('item added', 'success')
    // add to localStorage
    addToLocalStorage(id, value)
    setBackToDefault()
  }
  else if (value && editFlag) { 
    editElement.innerHTML = value
    displayAlert('value changed', 'success')
    // edit local storage
    editLocalStorage(editID, value)
    setBackToDefault()
  }
  else {
    displayAlert('please enter value', 'danger')
  }
}


function deleteItem(e) {
  let el = e.currentTarget.parentElement.parentElement
  list.removeChild(el)
  const id = el.dataset.id
  // hide the container when no items are in container
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }
  displayAlert('item deleted', 'danger')
  setBackToDefault()
  // remove from localStorage
  removeFromLocalStorage(id)
}
function editItem(e) {
  let el = e.currentTarget.parentElement.parentElement
  editElement = e.currentTarget.parentElement.previousElementSibling
  grocery.value = editElement.innerHTML 
  editFlag = true
  editID = el.dataset.id
  submitBtn.textContent = 'edit'
}
function clearItems() {
  let items = document.querySelectorAll('.grocery-item')
  // if items node list isn't empty, for each item remove it from list
  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
  setBackToDefault()
  localStorage.removeItem('list')
}
function displayAlert(text, msg) {
  alert.textContent = text;
  alert.classList.add(`alert-${msg}`)

  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${msg}`)
  }, 1000);
}

function setBackToDefault() {
  grocery.value = ''
  editFlag = false;
  editID = ''
  submitBtn.textContent = 'submit'
}

function addToLocalStorage(id, value){
  const grocery = {id, value}
  let items = getLocalStorage()
  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage(id){
  let items = getLocalStorage()
  items = items.filter(function(item){
    if(item.id !== id){
     return item
    }
  })
  localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(id, value){
  let items = getLocalStorage()
  items = items.map(function(item){
    if(item.id === id) item.value = value
    return item;
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function setupItems(){
  let items = getLocalStorage()
  items.forEach(item =>{
    createListItem(item.id, item.value)
  })
  container.classList.add('show-container')
}

function getLocalStorage(){
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')): []
}

function createListItem(id, value){
    let article = document.createElement('article')
    article.classList.add('grocery-item')
    let attr = document.createAttribute('data-id')
    attr.value = id;
    article.setAttributeNode(attr)
    article.innerHTML += `<p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`
    // picking up delete and edit button when available
    const deleteBtn = article.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', deleteItem)

    const editBtn = article.querySelector('.edit-btn')
    editBtn.addEventListener('click', editItem)

    list.appendChild(article)
}