"use strict";
let suggestions = document.querySelector("#suggestions")
let category = document.querySelector("#category") 
let search = document.querySelector("#search")
let list = document.querySelector("#list")
let Lchildren = list.children
let child1 = suggestions.children[0]
let child2 = suggestions.children[1]
let child3 = suggestions.children[2]
let count = 1
let empty = false
/*Cambiamos las sugerencias segun lo que se ponga en el objeto*/
search.onblur = function (){ /*Usamos el evento onblur*/
    let busqueda = search.value
    if(busqueda != ""){
        if(count===1){
            child1.innerText = busqueda
        }
        if(count===2){
            child2.innerText = busqueda
        }
        if(count===3){
            child3.innerText = busqueda
            count = 0
        }
        count += 1
    }
}
/*Motor de busqueda*/
category.onchange = function(){
    for (let i = 0; i < Lchildren.length; i++) {
        let objeto = Lchildren[i]
        let myCategory = objeto.classList;
        let filter = category.value
        console.log(filter);
        if (!myCategory.contains(filter)){
            objeto.classList.add("wrongFilter")
            objeto.style.display = "none"
        }
        if (myCategory.contains(filter)){
            if(objeto.classList.contains("wrongFilter")){
                objeto.classList.remove("wrongFilter")
                if(!objeto.classList.contains("invalid"))
                objeto.style.display = "initial"
            }
        }
        if(filter == "all"){
            if(objeto.classList.contains("wrongFilter")){
                objeto.classList.remove("wrongFilter")
                if(!objeto.classList.contains("invalid"))
                objeto.style.display = "initial"
            }
        }
    }
    let invalid = 0
    for (let i = 0; i < Lchildren.length; i++) { /*Cuenta si algun resultado es valido*/
        let objeto = Lchildren[i]
        if(objeto.classList.contains("invalid")){
            invalid +=1
        }
    }
}
search.oninput = function(){
    for (let i = 0; i < Lchildren.length; i++) {
        let objeto = Lchildren[i]
        let id = objeto.id;
        let busqueda = search.value
        id = id.toLowerCase()
        busqueda = busqueda.toLowerCase()
        if(id == "error") { /*esto borra cualquier div extra, si no se llenaria de divs ocultos*/
            objeto.remove()
        }
        if (!id.includes(busqueda)){

            objeto.classList.add("invalid")
            objeto.style.display = "none"
        }
        if (id.includes(busqueda)){
            if(objeto.classList.contains("invalid")){
                objeto.classList.remove("invalid")
                if(!objeto.classList.contains("wrongFilter"))
                objeto.style.display = "initial"
            }
        }
    }
    let invalid = 0
    for (let i = 0; i < Lchildren.length; i++) { /*Cuenta si algun resultado es valido*/
        let objeto = Lchildren[i]
        if(objeto.classList.contains("invalid")){
            invalid +=1
        }
    }
    if (invalid == Lchildren.length){ /*Añadimos el div de error*/
        list.insertAdjacentHTML("beforeend",`
        <div id="error"><h2>No hay ningun resultado que coincida<h2><div>
        `)
    }
    else{
        try { /*Borramos el div de error si existe*/
            let errorDiv = document.querySelector("#error")
            errorDiv.remove() 
        } catch (error) {
            
        }
    }
}