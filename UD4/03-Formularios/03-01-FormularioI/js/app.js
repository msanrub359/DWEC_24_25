"use strict";

//declaración de función
//evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", ()=>{
  const formulario=document.getElementById("formBusqueda");
  formulario.addEventListener("submit", ejecutar);
  
})

const ejecutar=(e)=> {
  //establecer a la variable objeto la etiqueta con id mostrar
  const mostrar=document.getElementById("mostrar");
  //diferentes formas de acceder al valor de la caja de texto
  // 1ª mediante el nombre del formulario y el nombre de la caja de texto
 mostrar.innerHTML = document.formNameBusq.nombre.value;
  //pasa al atributo value del input el valor Nuevo dato
   document.formNameBusq.nombre.value="Nuevo dato";

  //2ª mediante la colección de elementos del formulario
 mostrar.innerHTML += `<br>Nº de elementos del formulario ${document.formNameBusq.elements.length}`
 mostrar.innerHTML += `<br>${document.formNameBusq.elements[0].value}`;

  //3ª mediante la colección de elementos del formulario
 mostrar.innerHTML += `<br>${document.forms[0].elements["nombre"].value}`;
  //4ª mediante el ID del mostrar input
 mostrar.innerHTML += `<br>${document.getElementById("nombreId").value}`;

   e.preventDefault(); //anula el envío (evento)
}