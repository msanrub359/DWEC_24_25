"use strict"
//establecer el evento de carga del DOM
let pintar=false,
    colorOrig="";

window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent()
})
const establecerEvent=()=>{
    const elementosInput=document.getElementsByTagName("input");
    console.log(elementosInput);
    for (const element of elementosInput) {
        element.addEventListener("mouseover", overmouse );
        element.addEventListener("mouseout", outmouse)
        element.addEventListener("mousedown", downmouse );
        element.addEventListener("mouseup", upmouse);
        element.addEventListener("mousemove", movemouse);
    }
     
}
/**
 * @description codificar el ratón entra en el objeto
 * @param {object} e 
 */
const overmouse=(e)=>{
    e.target.style.background="#608ae5";
}
/**
 * @description cuando salga el ratón quitar color fondo
 * @param {object} e 
 */
const outmouse=(e)=>{
    e.target.style.background="";
}
/**
 * @description codificar cuando se pulsa un tecla del ratón
 * @param {object} e 
 */
const downmouse=(e)=>{
   console.log(e);
   if (e.buttons===1){ //verifica si el botón izquierdo del ratón ha sido pulsado
    pintar=true;
    colorOrig=e.target.style.background; //guardar el color
 }
}

 /**
 * @description codificar cuando se suelta un tecla del ratón
 * @param {object} e 
 */
const upmouse=(e)=>{
    pintar=false;
    e.target.style.background=colorOrig; //reestablecer el color
}
 /**
 * @description codificar cuando se mueve  del ratón
 * @param {object} e 
 */
const movemouse=(e)=>{
    if (pintar){
        e.target.style.background="yellow";
    }
    
}