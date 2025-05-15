"use strict"

const Can = (() => {

    const init =()=>{
        document.querySelectorAll("#first, #all").forEach(elemento =>{
            elemento.addEventListener("click", mostrar)
        })
    }

    const mostrar=(e)=> {
        let param="perro=";
        if (e.target.id == "first"){
            param+= '111A';
        }

       
        fetch (`./php/perros.php?${param}`)
        .then (response=>{
            if (response.status==200){
                return response.json();
            }else{
                Swal.fire("El fichero no existe")
            }
        })
        .then(datos=>{
            
            //eliminar filas
            // document.querySelector("tbody").querySelectorAll("tr").forEach(elemento=>{
            //     elemento.remove(); //elimina la fila
            // });
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
        })
        .catch(error=>{
            Swal.fire("Error comunicación con el servidor")
            
        })
      
      
    
    }
    return {
        init
    }



})()
document.addEventListener("DOMContentLoaded", Can.init);
