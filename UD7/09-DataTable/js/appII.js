"use strict"
const Alumnos=(()=>{

    const init =()=>{
        const btnRecargar=document.querySelector(".btn-pastel");
        btnRecargar.addEventListener("click", mostrarTabla)
        document.querySelector('#selectAll').addEventListener('change', seleccionar)
       
        mostrarTabla();
    }

   /**
    * @description mostrar la tabla con datos de alumnos
    */
    const mostrarTabla=async()=>{
        const URI = "https://luz.alwaysdata.net";
        
        try {
           const response=await fetch(`${URI}/alumnos`);
           if (response.status == 200){
             const data=await response.json();
           //rellenar la tabla
            data.forEach(elemento => {
                    //crear las filas
                    const row=document.createElement("tr");

                     // columna checkbox
                    const colCheckbox = document.createElement("td");
                    colCheckbox.classList.add("text-center"); // opcional: centrar la casilla
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.classList.add("form-check-input"); // diseño de Bootstrap
                    checkbox.value = elemento.idAlumno; // almacenar el idAlumno en el value del checkbox
                    colCheckbox.append(checkbox)
        
                    const colIdAlumno=document.createElement("td");
                    colIdAlumno.textContent=elemento.idAlumno;
        
                    const colApeNom=document.createElement("td");
                    colApeNom.textContent=elemento.apellidosNombre;
        
                    const colidCurso=document.createElement("td");
                    colidCurso.textContent=elemento.idCurso;
        
                row.append(colCheckbox, colIdAlumno, colApeNom, colidCurso);
                document.querySelector(".table tbody").append(row)
            });
            
            configurarTabla();
        
           }else{
            console.log('Error, la tabla no existe');
           }
        
        } catch (error) {
            throw new Error(`Error: ${error}`);
        }
    }
    
    /**
     * @description Esta función configura y personaliza una tabla utilizando la librería DataTables.
     */
    const configurarTabla=()=>{
        //configurar la tabla con la librería dataTable
        $('.table').DataTable({
            responsive:true,  // Hace que la tabla sea responsiva y se ajuste a diferentes tamaños de pantalla
            language:{
                url:'../../assets/librerias/DataTables/es-Es.json' // Configura el idioma de la tabla en español
            },
            columnDefs:[ //centrar el contenido de las columnas
                {
                    "className": "dt-center", "targets":"_all"
             },
             {
                orderable: false,      // Desactivar ordenación
                targets: 0,            // Primera columna (índice 0)
            },
            ],
            sPaginationType:'full_numbers', // Muestra los botones de paginación 'First', 'Previous', 'Next' y 'Last'
            bDestroy :true, // Permite destruir y reiniciar la tabla cuando se vuelva a inicializar
           
        });
    }

    /**
     * @description Esta función selecciona o deselecciona todos los checkboxes de la página 
     *              al alternar el estado de cada uno de ellos.
     */
    const seleccionar=()=>{
          // Obtener todos los checkboxes dentro del cuerpo de la tabla   
        const checkboxes = document.querySelectorAll('.table tbody input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            // Alternar el estado de cada checkbox (marcar/desmarcar)
            checkbox.checked = !checkbox.checked
        })
    };
       
    
    return {
        init
    }
})();


document.addEventListener("DOMContentLoaded", Alumnos.init);
