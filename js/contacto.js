"use strict";
let form = document.forms[0] //solo un formulario por página
let error = document.querySelector("#error") //mensaje de error
let logged = document.querySelector("#logged") // input oculto , muestra si esta iniciado la sesion 

for (let i = 0; i < form.length; i++) {
    let input = form[i]
    input.onblur = function () {
        if(input.value == ""){
            input.classList.add("invalid")
            error.innerHTML = "Todos los campos son obligatorios"
        }
    }
    input.onfocus = function(){
        if(input.classList.contains("invalid")){
            input.classList.remove("invalid")
            error.innerHTML = ""
            if(logged.value == "false"){
                error.innerHTML = "Necesitas iniciar sesion"
            }            
        }

    }
}
if(logged.value == "false"){
    error.innerHTML = "Necesitas iniciar sesion"
}
