"use strict"

//declaración de eventos con el modelo tradicional

//evento load del navegador
// const cargar=()=>{
//     alert("Página cargada")
// }
// function cargar(){
//     alert("Página cargada")
// }
// window.onload=cargar;
//función anónima arrow

// window.addEventListener("load", ()=>{
//     console.log('load');
// })

window.addEventListener("DOMContentLoaded", ()=>{
    console.log('DOMContentLoaded');
    //establecer evento click al botón
    const boton=document.getElementById("enviar");
    boton.addEventListener("click",accBoton);

    //cuando reciba el foco el nombre, cambiar el color de fondo
    // document.getElementById("nombreId").addEventListener("focus",function(){
    //    this.style.backgroundColor="Cyan";
    // })
    // document.getElementById("nombreId").addEventListener("focus",(e)=>{
    document.getElementById("nombreId").addEventListener("focusin",(e)=>{
        console.log(e);
        //e.target es el objeto, similar a this
           e.target.style.backgroundColor="Cyan";
    })
    // //cuando pierda el foco el nombre, quitar fondo
    // document.getElementById("nombreId").addEventListener("blur",function(){
    document.getElementById("nombreId").addEventListener("focusout",function(){
        this.style.backgroundColor="";
     })
})
const accBoton=(evento)=>{
    const boton=document.getElementById("enviar");
    const nombre=document.getElementById("nombreId")
    const apellidos=document.getElementById("apellidosId")
    alert(`El nombre es ${nombre.value} y los apellidos son ${apellidos.value}`);
    //eliminar el evento click del botón
   boton.removeEventListener("click",accBoton);
   boton.type="button"; //quitar el tipo submit
    //eliminar la acción del botón (submit)
    evento.preventDefault();
}
//función anónima
// window.addEventListener("DOMContentLoaded", function(){
//     //establecer evento click al botón
// })