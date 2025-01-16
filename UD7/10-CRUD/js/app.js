"use strict";
import {  getAlumnos, addAlumno, getCursos, updateAlumno} from "./API.js";

import { mostrarModal } from "./utilidades.js";



const Alumnos = (()=>{
  const init=()=>{
    confFormulario(); //configurar formulario con restricciones
    getCursos(); //cargar los cursos en el select de la ventana modal
    getAlumnos(); //cargar alumnos en la tabla
  
    document.querySelector(".addAlumno").addEventListener("click", mostrarModal)
  }

  /**
   * @description configuración del formulario con la librería jquery-validation
   */
  const confFormulario = () => {
    $(".frmAlumnos").validate({
      errorElement: "em",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("invalid-feedback");
  
        if (element.prop("type") === "radio") {
          error.insertAfter(element.parent("div"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
      },
      rules: {
        nameApel: "required",
        idCurso: "required",
      },
  
      submitHandler: (form) => {
        if(document.querySelector(".submit").innerText=="Insertar"){
          addAlumno(); //añadir alumno
        }else{
          updateAlumno();//actualizar alumno
        }
       
      },
    });
  };



 
  
  return{
    init
  }

})()


document.addEventListener("DOMContentLoaded", Alumnos.init);








