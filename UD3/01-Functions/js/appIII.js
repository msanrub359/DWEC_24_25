"use strict"
//ámbito o scope de variables o constantes dentro de un función
let mensaje='variable global';
const mostrar=function(){
    let mensaje='variable local';
    console.log(mensaje);
}
//cuerpo script
mostrar();
console.log(mensaje);