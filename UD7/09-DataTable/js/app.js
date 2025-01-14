"use strict"

const Alumnos=(()=>{

        const init =()=>{
            const btnRecargar=document.querySelector(".btn-pastel");
            btnRecargar.addEventListener("click", mostrarTabla)
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
               // Destruir la tabla si ya está inicializada
                if ($.fn.DataTable.isDataTable('.table')) {
                    $('.table').DataTable().destroy();
                }
                //limpiar las filas
                document.querySelectorAll(".table tbody tr").forEach(row=>row.remove()); //Eliminar filas de la tabla
               //rellenar la tabla
                 data.forEach(elemento => {
                        //crear las filas
                        const row=document.createElement("tr");
            
                        const colIdAlumno=document.createElement("td");
                        colIdAlumno.textContent=elemento.idAlumno;
            
                        const colApeNom=document.createElement("td");
                        colApeNom.textContent=elemento.apellidosNombre;
            
                        const colidCurso=document.createElement("td");
                        colidCurso.textContent=elemento.idCurso;
            
                    row.append(colIdAlumno, colApeNom, colidCurso);
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
            responsive: true,  // Hace que la tabla sea responsiva y se ajuste a diferentes tamaños de pantalla
            columnDefs: [ // Centrar el contenido de las columnas
                {
                    className: "dt-center", 
                    targets: "_all"
                },
                
            ],
            select: {
                style: 'multi',   // Permite la selección múltiple de filas
                items: 'row',     // Solo permite seleccionar filas, no celdas ni columnas
                info: false
            },
            language: {
                url: '../../assets/librerias/DataTables/es-Es.json' // Configura el idioma en español
                
            },
                                
            sPaginationType: 'full_numbers', // Muestra los botones de paginación 'First', 'Previous', 'Next' y 'Last'
            bDestroy: true, // Permite destruir y reiniciar la tabla cuando se vuelva a inicializar
           
            });
        }

        return {
            init
        }
})();


document.addEventListener("DOMContentLoaded", Alumnos.init);

