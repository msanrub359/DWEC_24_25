"use strict"

const Can = (() => {

    const init =()=>{
        document.querySelectorAll("#first, #all").forEach(elemento =>{
            elemento.addEventListener("click", mostrar)
        })
    }

    const mostrar=(e)=> {
        let parametro="perro="
        if (e.target.getAttribute("id") == "first") {
           parametro+= "111A" 
        }
        
        fetch(`./php/perros.php?${parametro}`)
        .then((response) =>{
            if (response.status==404){
                Swal.fire(`No existe el fichero perros.php`); // Mensaje detallado de la API
              }if (response.status==200){
                return response.json()
              }
        }) 
        .then((datos) => {
          //elimina las filas
           document.querySelector("tbody").querySelectorAll("tr").forEach(element=>{
            element.remove();
           })
           
            datos.data.forEach(elemento => {
                  const fila=document.createElement("tr");

                  const colChip=document.createElement("td");
                  colChip.textContent=elemento.chip;

                  const colNombre=document.createElement("td");
                  colNombre.textContent=elemento.nombre;

                  const colRaza=document.createElement("td");
                  colRaza.textContent=elemento.raza;

                  const colFechaNac=document.createElement("td");
                  colFechaNac.textContent=elemento.fechaNac;

                  fila.append(colChip,colNombre,colRaza,colFechaNac);
                  document.querySelector("tbody").append(fila);
            })
             
             
        })
            
        .catch(error => {
          console.log(error);
        });
      
    
    }
    return {
        init
    }



})()
document.addEventListener("DOMContentLoaded", Can.init);
