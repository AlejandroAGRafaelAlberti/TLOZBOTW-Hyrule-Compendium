"use strict";
let form = document.forms[0] //solo un formulario por página
let error = document.querySelector("#error") //mensaje de error
let correo = document.querySelector("#correo") // input de correo
let password = document.querySelector("#password") // input de contrasena
let password2 = document.querySelector("#password2") // input de verificacion de contrasena

let passMayus = new RegExp("[A-Z]");
let passMinus = new RegExp("[a-z]");
let emailA = new RegExp("[@]")

//le añado a cada input del form los eventos onblur y onfocus, para validarlos cambiando <p> error
for (let i = 0; i < form.length; i++) {
    let input = form[i]
    input.onblur = function () {
        if (input == correo){
            if (!emailA.test(correo.value) ){
                input.classList.add("invalid")
                error.innerHTML = "El correo no es válido, le falta @... "
            }
        }
        if (input == password){
            if (password.value.length < 4){
                input.classList.add("invalid")
                error.innerHTML = "Necesitas introducir al menos 4 caracteres"
            }
            if (!passMayus.test(password.value) ){
                input.classList.add("invalid")
                error.innerHTML = "Necesitas introducir una mayuscula"
            }
            if (!passMinus.test(password.value) ){
                input.classList.add("invalid")
                error.innerHTML = "Necesitas introducir una minuscula"
            }
        }
        if (input == password2){
            if (password.value != password2.value){
                input.classList.add("invalid")
                error.innerHTML = "Necesitas introducir la misma contraseña"
            }
        }
        if(input.value == ""){
            input.classList.add("invalid")
            error.innerHTML = "Todos los campos son obligatorios"
        }
    }
    input.onfocus = function(){
        if(input.classList.contains("invalid")){
            input.classList.remove("invalid")
            error.innerHTML = ""
        }

    }
}
