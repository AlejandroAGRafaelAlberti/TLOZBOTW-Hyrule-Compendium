"use strict";
function addToList(category){
    category.sort( compare );
    category.forEach(element => {
        element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1)
        divlist.insertAdjacentHTML("beforeend",
        `<a href="object_view.html?id=${element.id}" id="${element.name}" class="${element.category}">
        <div>
        <img src="${element.image}" alt="cofre">
        <div>
        <h2>${element.name}</h2>
        <p>
        ${element.description}
        </p>
        </div>
        </div>
        </a>`
        )
    });
}
function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
let divlist = document.getElementById("list")
const handleRrror = response =>{
    if(!response.ok){
        throw Error (response.status)
    } else {
        return response;
    }
}
fetch("https://botw-compendium.herokuapp.com/api/v2")
.then(handleRrror)
.then(response => response.json())
.then(data =>{
    data = data.data
    console.log(data)
    addToList(data.creatures.food)
    addToList(data.creatures.non_food)
    addToList(data.equipment)
    addToList(data.materials)
    addToList(data.monsters)
    addToList(data.treasure)
}) 
.catch(error =>{
    console.log(error)
})