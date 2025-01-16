"use strict";

import { mostrarMensaje, mostrarModal, limpiarFormulario } from "./utilidades.js";


const URI = "https://luz.alwaysdata.net";

/**
 * 
 * @description Añade un alumno en la tabla alumnos
 */

export const addAlumno = async () => {
  //recoger los datos del formulario en un objeto
  const alumno = {
    nameAl: document.querySelector("#nameApel").value,
    idCurso: document.querySelector("#idCurso").value
  }
  //configurar los parámetros necesarios para realizar la petición AJAX con fetch
  const param = {
    method: "POST",
    body: JSON.stringify(alumno), // Convierte el objeto a formato JSON
    
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${URI}/alumnos`, param);
    
    if (response.status== 201){
      const data = await response.json();
      mostrarMensaje(`Se ha insertado el alumno con el id ${data.id}`, "info")
      await getAlumnos()
    }else{
      console.log(response);
      mostrarMensaje(`Error, el alumno no se ha insertado`, "error")
    }
    limpiarFormulario()
  } catch (error) {
    console.log(error);
    mostrarMensaje(`El alumno no se ha insertado ${error}`, "error")
  }


   
   
};

/**
 * @description leer los alumnos de la tabla Alumnos y mostrarlos en un dataTable
 */
export const getAlumnos = async () => {
  
  try {
    const response=await fetch(`${URI}/alumnos`);
    if (response.status == 200){
     
       const data=await response.json();
        // Destruir la tabla si ya está inicializada
        if ($.fn.DataTable.isDataTable('.table')) {
          $('.table').DataTable().destroy();
        }
       
       document.querySelectorAll(".table tbody tr").forEach(row=>row.remove()); //Eliminar filas de la tabla

       data.forEach(elemento => {
        //crear las filas
        const row=document.createElement("tr");

        const colIdAlumno=document.createElement("td");
        colIdAlumno.textContent=elemento.idAlumno;

        const colApeNom=document.createElement("td");
        colApeNom.textContent=elemento.apellidosNombre;

        const colidCurso=document.createElement("td");
        colidCurso.textContent=elemento.idCurso;
        const colAcciones=document.createElement("td");
        colAcciones.append(addBotAcc(elemento.idAlumno))

        row.append(colIdAlumno, colApeNom, colidCurso, colAcciones);
        document.querySelector(".table tbody").append(row)
       }); 
       configurarTabla();
    
      
    }else {
     mostrarMensaje('Error, la tabla no existe", "error');
    }
  } catch (error) {
    mostrarMensaje(error.message, "error");
  }
};

/**
 * @description lee el alumno que se va a realizar la actualización para mostrar los datos en la ventana modal
 * @param {number} id el id del alumno que se va a leer
 * @returns el objeto con los datos del alumno
 */

const getAlumno = async (id) => {
  
  try {
    const response=await fetch(`${URI}/alumnos/idAlumno/${id}`);
    if (response.status == 200){
       return await response.json();
    }else {
      console.log(response);
     mostrarMensaje('Error, el alumno no existe", "error');
    }
  } catch (error) {
    console.log(error);
    mostrarMensaje(error.message, "error");
  }
};

/**
 * @description consultar los cursos para añadirlos al  select
 */
export const getCursos = async () => {
  
  try {
    const response=await fetch(`${URI}/cursos`);
    if (response.status == 200){
     
       const data=await response.json();

       console.log(data);
       data.forEach(elemento => {
        //crear las opciones
        const colOption=document.createElement("option");
        colOption.setAttribute("value", elemento.idCurso);
        colOption.textContent=elemento.idCurso;
        document.querySelector("#idCurso").append(colOption);
       
       }); 

    }else {
     console.log(response);
     mostrarMensaje('Error, no se ha podido extraer los cursos', 'error');
    }
  } catch (error) {
    console.log(error);
    mostrarMensaje(error.message, "error");
  }
};

/**
 * 
 * @param {Event} e corresponde al evento click del botón
 */
const deleteAlumno = async (e) => {
 
    Swal.fire({
      title: "¿Desea eliminar el alumno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      focusCancel:true
    }).then(async(result) => {
      if (result.isConfirmed) {
        
        const param = {
          method: "DELETE",
        }
        try {
          //currentTarget apunta al botón , no al hijo
            const button = e.target.closest("button");
          
            const id= button.getAttribute("id"); //extraer el idAlumno que se encuentra en el atributo id del botón
            const response = await fetch(`${URI}/alumnos/${id}`, param);
            if (response.status == 200){
              const data = await response.json();
              mostrarMensaje(`Alumno borrado`, 'info');
              await getAlumnos();
            }else{
              console.log(response)
              mostrarMensaje(`Error, alumno no ha sido borrado`, 'error');
            }
          } catch (error) {
            console.log(error);
            mostrarMensaje(`Error en la tabla alumnos`, 'error');
         }
      };
       
        
     
    });
  
};

/**
 * @description permite mostrar los datos del alumno que se va a actualizar en la ventana modal
 * @param {Event} e evento click
 */
const actualizarAlumno =async (e) => {
 //currentTarget apunta al botón , no al hijo
 const button = e.target.closest("button");
 const id= button.getAttribute("id"); 

 //cargar los datos del cliente
 const [datos]= await getAlumno(id); //Devuelve un alumno en un array
 //mostrar la ventana modal
 mostrarModal()
 //cargar los datos en el formulario
 document.querySelector("#idAlumno").value=datos.idAlumno;
 document.querySelector("#nameApel").value=datos.apellidosNombre;
 document.querySelector("#idCurso").value=datos.idCurso;
 
//modificar los textos de la ventana modal
 document.querySelector(".modal-title").innerText="Modificar Alumno";
 document.querySelector(".submit").innerText="Modificar";
};

/**
 * @description actualiza el alumno en la tabla
 */
export const updateAlumno = async () => {
  //crear el objeto con los datos que se van a actualizar
  const alumno = {
    nameAl: document.querySelector("#nameApel").value,
    idCurso: document.querySelector("#idCurso").value
  }
  //establecer en la constante el idAlumno
   const idAlumno=document.querySelector("#idAlumno").value
    const param = {
      method: "PUT",
      body:JSON.stringify(alumno),
      headers:{
       "Content-Type":"application/json"
      }
    };
    try {
      const response = await fetch(`${URI}/alumnos/${idAlumno}`, param);
      if (response.status == 200){
     
        const data=await response.json();
         mostrarMensaje("Alumno actualizado", "info");
        await getAlumnos(); //actualizar la tabla de alumnos
      }else{
        console.log(response);
        mostrarMensaje("Error, el alumno no ha sido actualizado", "error")
      }
    } catch (error) {
      console.log(error);
      mostrarMensaje(`Error, al actualizar el alumno ${error}`, "error")
    }
    limpiarFormulario()
  };
  
/**
 * @description Configuar la tabla con DataTable
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
        pageLength: 5, // Configura 5 registros por página
        lengthMenu: [5, 10, 25, 50, 100], // Opcional: Menú para seleccionar el número de registros por página
        language: {
            url: '../../assets/librerias/DataTables/es-Es.json' // Configura el idioma en español
            
        },
                            
        sPaginationType: 'full_numbers', // Muestra los botones de paginación 'First', 'Previous', 'Next' y 'Last'
        bDestroy: true, // Permite destruir y reiniciar la tabla cuando se vuelva a inicializar
       
        });
    }


  /**
   * 
   * @param {number} idAlumno 
   * @returns los botones que se insertarán en la columna acciones de la tabla
   */
  const addBotAcc=(idAlumno)=>{
    //crear botones de acción editar y eliminar
    
   
    const divBotones=document.createElement("div");
    divBotones.classList.add("button-spacing");
 
    const buttonEdit=document.createElement("button");
    buttonEdit.classList.add ("edit", "btn", "btn-success");
    //crear fontAwesome
    const fontEdit=document.createElement("i");
    fontEdit.classList.add("fa-regular", "fa-pen-to-square");
    buttonEdit.setAttribute("id", idAlumno ); //establecer al botón el id del alumno
 
    buttonEdit.addEventListener("click", actualizarAlumno)
    //añadir fontawesome en buton
    buttonEdit.append(fontEdit);
 
    const buttonDel=document.createElement("button");
    buttonDel.classList.add ("del", "btn", "btn-danger");
    buttonDel.setAttribute("id", idAlumno ); //establecer al botón el id del alumno
 
   
    buttonDel.addEventListener("click", deleteAlumno)
    //crear fontAwesome
    const fontDel=document.createElement("i");
    fontDel.classList.add("fa-solid", "fa-trash");
 
    //añadir fontawesome en buton
    buttonDel.append(fontDel);
 
    //añadir los botones a la capa
    divBotones.append(buttonEdit, buttonDel);
    //devolver la capa para insertarla en la columna acciones
    return  divBotones;
 }







