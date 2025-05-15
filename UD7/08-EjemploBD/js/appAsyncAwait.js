"use strict";

const Can = (() => {
  const init = () => {
    document.querySelectorAll("#first, #all").forEach((elemento) => {
      elemento.addEventListener("click", mostrar);
    });
  };

  const mostrar = async (e) => {
   let param="perro=";
        if (e.target.id == "first"){
            param+= '111A';
        }
    try {
      const response= await fetch (`./php/perros.php?${param}`);
       if (response.status==404){
          Swal.fire("El fichero no existe")
       }else if (response.status== 200){
         const datos= await response.json();
         document.querySelector("tbody").innerText=""
           
            const {data} = datos
            //console.log(data)
            data.forEach(elemento=>{
                const fila = document.createElement("tr");
                const colChip=document.createElement("td");
                colChip.textContent=elemento.chip;
                const colNombre=document.createElement("td");
                colNombre.textContent=elemento.nombre;
                const colRaza=document.createElement("td");
                colRaza.textContent=elemento.raza;
                const colFechaNac=document.createElement("td");
                colFechaNac.textContent=elemento.fechaNac;

                fila.append(colChip,colNombre,colRaza, colFechaNac);
                document.querySelector("tbody").append(fila)
            })
       }
    } catch (error) {
       Swal.fire("Error comunicación con el servidor")
    }
   
  };

  return {
    init,
  };
})();
document.addEventListener("DOMContentLoaded", Can.init);
