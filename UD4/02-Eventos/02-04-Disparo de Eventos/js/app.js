"use strict"
/**
 * captura, el evento se propaga desde el documento raíz hacía el elemento objetivo. De arriba hacia abajo en el DOM
 * burbujeo, el evento se propaga desde el elemento objtivo hacía el documento raíz. De abajo hacia arriba. Propagación por defecto
 */
window.addEventListener("DOMContentLoaded",()=>{
    // eventoCaptura();
    eventoBurbujeo();
})
const eventoCaptura=()=>{
    document.getElementById("capaPrincipal").addEventListener("click", function(){
        alert("Capa principal")
    },true);
    document.getElementById("capaSecundaria").addEventListener("click", function(){
        alert("Capa Secundaria")
    })
}
const eventoBurbujeo=()=>{
    document.getElementById("capaPrincipal").addEventListener("click", function(){
        alert("Capa principal")
    },false); //también se puede omitir el tercer argumento
    document.getElementById("capaSecundaria").addEventListener("click", function(event){
        alert("Capa Secundaria");
        event.stopPropagation(); //detiene el flujo del evento
    })
}