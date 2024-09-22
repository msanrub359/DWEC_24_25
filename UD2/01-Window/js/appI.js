"use strict"
let numVent=1;
//abrir subventana
function crearVent(){
    const ventana=window.open("", `secundaria${numVent}`, "width=200,height=200");
    //añadir título y botón a la ventana secundaria
    ventana.document.write(`<h1>Ventana secundaria ${numVent++}</h1>`);
    ventana.document.write("<button type='button' onclick='self.close()'>Cerrar ventana</button>")
   

}

function cerrarVent(){
    self.close();
}
