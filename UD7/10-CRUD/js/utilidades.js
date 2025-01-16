let modal=false;

/**
 * @description Crear una capa dentro del contenedor para mostrar el mensaje
 * @param {String} mensaje | Cadena de texto a mostrar
 */

export const mostrarMensaje = (mensaje, tipo = "info") => {
    return new Promise((resolve) => {
      const alerta = document.querySelector(".alerta");
  
      if (!alerta) {
        const alerta = document.createElement("div");
  
        // Asignar clases comunes para la alerta
        alerta.classList.add(
          "alert",
          "p-3",
          "rounded",
          "alerta"
        );
  
        // Estilo según el tipo de mensaje
        if (tipo === "error") {
          alerta.classList.add("alert-danger"); // Estilo para errores
        } else if (tipo === "info") {
          alerta.classList.add("alert-info"); // Estilo para información
        }
  
        // Añadir el mensaje
        const spanMen=document.createElement("span");
        spanMen.classList.add("font-bold");
        spanMen.textContent=mensaje

        alerta.append(spanMen);
  
         // Estilos CSS específicos para la posición
      alerta.style.position = "fixed"; // Fijo en la ventana
      alerta.style.top = "40px"; // Desde la parte superior
      alerta.style.right = "40px"; // Desde la parte derecha
      alerta.style.zIndex = "1000"; // Asegura que esté por encima de otros elementos
      alerta.style.maxWidth = "500px"; // Ancho máximo de la alerta
      alerta.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Sombra para mejor visibilidad
  
        // Añadir la alerta al body
        document.body.append(alerta);
  
        // Eliminar la alerta después de 3 segundos
        setTimeout(() => {
          alerta.remove();
          resolve();
        }, 2000);
      }
    });
  };


export const mostrarModal=()=>{
    
  //modificar los textos
   document.querySelector(".modal-title").innerText="Añadir Alumno";
   document.querySelector(".submit").innerText="Insertar";

      const ventanaModal=document.querySelector("#frmModal");
    
   //crear una instancia de la clase modal
    modal = new bootstrap.Modal(ventanaModal);
    //mostrar la ventana modal
   modal.show();
  }

  /**
   * @description limpiar el formulario de la ventana modal
   */

  export const limpiarFormulario=()=>{
    const elementos=document.querySelectorAll(".form-control");
    elementos.forEach(elemento=>elemento.value=""); //limpiar
    modal.hide(); //cerrar el modal
   
  }

