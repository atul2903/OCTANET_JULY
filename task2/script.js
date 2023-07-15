
window.onload = function() {
  display()
}
const itemsA = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

document.getElementById('btn').addEventListener('click', () => {
  let val = document.getElementById('ds').value
  if (val == '')
    alert("enter a note first !")
  else {
    itemsA.push(val)
    localStorage.setItem("items", JSON.stringify(itemsA))
    location.reload()
  }
})


function display() {
  let item = ""
  for (let i = 0; i < itemsA.length; i++) {
    item += `<div class="item">
            <div class="input-controller">
            <textarea disabled>${itemsA[i]} </textarea>
            <div class="edit-controller">
            <i class="fa-solid fa-check "></i>
            <i class="fa-sharp fa-solid fa-trash "></i>
            </div>
            </div>
            <div class="update-controller">
            <button class="editBtn" >Edit</button>
         
            <button class="deleteBtn">Delete</button>
                <button class="saveBtn"  id="save" >Save</button>
            </div>
            </div>
    
    `
  }
  document.getElementById("show").innerHTML = item
  addDelete()
  addEdit()
  addSave()
}

function addSave() {
  let edit1 = document.querySelectorAll(".saveBtn")
  let ip1 = document.querySelectorAll(".input-controller textarea")
  edit1.forEach((ed, i) => {

    ed.addEventListener('click', () => {
      
      itemsA[i] = ip1[i].value
      localStorage.setItem("items", JSON.stringify(itemsA))
      location.reload()
    })
  })
}


function addEdit() {
  let edit = document.querySelectorAll(".editBtn")
  let ip = document.querySelectorAll(".input-controller textarea")
  let sv=document.querySelectorAll(".saveBtn button")

  edit.forEach((ed, i) => {
  
    ed.addEventListener('click', () => {
      
      ip[i].disabled = false
    })
  })
}


function addDelete() {
  let del = document.querySelectorAll(".deleteBtn")
  del.forEach((db, i) => {
    db.addEventListener('click', () => { deleteitem(i) })
  })
}



function deleteitem(i) {
  itemsA.splice(i, 1)
  localStorage.setItem("items", JSON.stringify(itemsA))
  location.reload()
}



document.getElementById("del").addEventListener("click", () => {
  localStorage.clear()
  location.reload()
})