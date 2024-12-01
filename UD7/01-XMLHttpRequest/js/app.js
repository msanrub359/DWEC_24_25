"use strict";

//Patrón módulo
/**
 * Este código define un módulo Weather con una función pública
 *  init, la cual se ejecuta automáticamente cuando el documento
 *  ha terminado de cargar (cuando se dispara el evento DOMContentLoaded).
 *  Al ejecutarse init, imprime "Weather" en la consola.
 */
const Weather = (() => {
  
  const init = () => {
    
  };

  const validar = (e) => {
    
    }
  };

  

  /**
   * @description Crear una capa dentro del contenedor para mostrar el mensaje
   * @param {String} mensaje | Cadena de texto a mostrar
   */
  const mostrarError = (mensaje) => {
    const alerta = document.querySelector(".alerta");
    if (!alerta) {
      const alerta = document.createElement("div");

      alerta.classList.add(
        "alert",
        "alert-danger",
        "p-3",
        "rounded",
        "mx-auto",
        "mt-3",
        "text-center",
        "alerta"
      );
      //crear un span
      const textoSpan = document.createElement("span");
      textoSpan.classList.add("font-bold");
      textoSpan.innerHTML = `<b>¡Error!</b> ${mensaje}`;
      //Añadir texto a la capa alerta
      alerta.append(textoSpan);

      //añadir la capa al  contenedor
      const container = document.querySelector(".main-container");
      container.append(alerta);
      //establer un tiempo
      setTimeout(() => {
        alerta.remove();
      }, 3000);
    }
  };
  /**
   *
   * @param {String} pais
   */
  const consultarAPIWeather = async (pais) => {
    
  };

  

  /**
   * @description Mostrar las temperaturas de la ciudad
   * @param {Object} datos | Contiene los datos de la API
   */
  const mostrarClima = (datos) => {
   
    
  };

   const crearSpinner=()=>{
    return new Promise((resolve) => {
      const spinner = document.createElement("span");
      spinner.classList.add("loader");
      resultado.append(spinner);

      // El spinner debe permanecer por 3 segundos 
      setTimeout(() => {
        spinner.remove(); // Eliminar el spinner
        resolve(); // Resuelve la promesa después de que el spinner haya desaparecido
      }, 2000);
    });
   }


  return {
    init,
  };
})();

document.addEventListener("DOMContentLoaded", Weather.init);
