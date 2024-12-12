"use strict";
const EjemploXML = (()=>{
    const init = ()=>{
        document.querySelector("#cursos").addEventListener("change", mostrarAsig);
    }
    
    const mostrarAsig = () => {
        fetch("Ejemplo5.xml")
          .then((response) => {
              if (response.status=='404'){
                  mostrarError(`No existe el fichero`); // Mensaje detallado de la API
                }if (response.status=='200'){
                  return response.text();
              }  
          })
          .then((data) => {
            const parser = new DOMParser(); // crear una instancia que permita analizar y convertir cadenas de texto(XML)
            //para ser manipulados como   parte del DOM
            const xmlDoc = parser.parseFromString(data, "text/xml");
      
            //borrar todas las opciones excepto la primera
           
            const opciones = document
              .querySelector("#modulos")
              .querySelectorAll("option:nth-child(n+2)");
      
            opciones.forEach((opcion) => opcion.remove()); // Elimina cada opción
            addOpciones(xmlDoc);
            //recorrer el documento
            
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
      /**
       * 
       * @param {Object} xmlDoc | Mostrar las asignaturas por módulos
       */
      const addOpciones=(xmlDoc)=>{
      
          xmlDoc.querySelectorAll("curso").forEach((element, index) => {
              const selectedIndex =
                document.querySelector("#cursos").selectedIndex - 1; //Indice del curso seleccionado
      
              if (index == selectedIndex) {
                element.querySelectorAll("asig").forEach((mod) => {
                  //recorrer los módulos
                  const option = document.createElement("option");
                  option.textContent = mod.textContent;
                  document.querySelector("#modulos").append(option);
                });
              }
            });
      }

    return{
        init
    }

})()

document.addEventListener("DOMContentLoaded", EjemploXML.init);

