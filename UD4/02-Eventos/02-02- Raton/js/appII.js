"use strict"
//establecer el evento de carga del DOM
let pintar=false,
    colorOring="";
window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent()
})
const establecerEvent=()=>{
    const elementosInput=document.getElementsByTagName("input");
    for(const element of elementosInput){
        element.addEventListener("mouseover", overmuse);
        element.addEventListener("mouseout", outmuse);
        element.addEventListener("mousedown", downmuse);
        element.addEventListener("mouseout", upmuse);
        element.addEventListener("mousemove", movemuse);

    }

}

/**
 * @description codificar el evento mouseover del ratón
 * @param {object} e
 */

const overmuse=(e)=>{
    console.log(e)

    e.target.style.background= "#608ae5";
}

/**
 * @description cuando salga el raton quitar el color del fondo
 * @param {object} e
 */

const outmuse=(e)=>{
    console.log(e)
    e.target.style.background= "";
   
}
/**
 * @description codifica cuando se pulsa el raton
 * @param {objet} e
 */
const downmuse=(e)=>{
    console.log(e);
    if (e.buttons===1){//Verifica asi es el click izquierdo el que se a pulsado
        pintar=true;
        colorOring=e.target.style.background;//Guardar el color original
    }
       
}
/**
 * @description codificar cuando se sulta el raton
 * @param {objet} e
 */
const upmuse=(e)=>{
    pintar=false;
    e.target.style.background=colorOring;//restablecemos el color
    console.log(colorOring);

}
/**
 * @description codifica cuando se mueve el raton
 * @param {objet} e
 */
const movemuse=(e)=>{
    console.log(pintar);
    if (pintar){
        console.log("pintar 2");
        e.target.style.background="yellow";
    }
   
}