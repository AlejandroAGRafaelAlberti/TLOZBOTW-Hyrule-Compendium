"use strict";
//añado un evento para cuando pulsas una tecla.
//si la tecla es enter, te lleva a busqueda_listado.html == pulsar el boton principal
document.addEventListener('keydown', (event) => { 
    const keyName = event.key;
    if (keyName == "Enter"){
        window.location.href = "busqueda_listado.html"
    }
});