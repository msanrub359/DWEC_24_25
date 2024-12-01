"use strict";

//Patrón módulo
/**
 * Este código define un módulo Weather con una función pública
 *  init, la cual se ejecuta automáticamente cuando el documento
 *  ha terminado de cargar (cuando se dispara el evento DOMContentLoaded).
 *  Al ejecutarse init, imprime "Weather" en la consola.
 */
const Weather = (() => {
  const pais = document.querySelector("#countrySelect");
  const ciudad = document.querySelector("#cityInput");
  const boton = document.querySelector("button");
  const resultado = document.querySelector(".result-container");
  const init = () => {
    //establecer evento al select
    boton.addEventListener("click", validar);
  };

  const validar = (e) => {
    e.preventDefault();
    //validar

    const ciudad = document.querySelector("#cityInput");

    if (ciudad.value === "" || pais.value === "") {
      mostrarError("Todos los datos son obligatorios");
    } else {
      //extraer el valor de la opción seleccionada
      const pais = document.querySelector(
        "#countrySelect option:checked"
      ).value;

      consultarAPIWeather(pais);

      
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
    console.log(ciudad.value, pais);
    const API = "2f52fa02726085297f9f1665bd255e67";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value},${pais}&appid=${API}`;
    //realizamos la petición
    await crearSpinner();

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const datos = JSON.parse(xhr.responseText);
        const {cod} = datos
        if (cod === '404') {
          mostrarError(`No existe ${ciudad.value} en ${pais}`) // Mensaje detallado de la API
        }else{

          mostrarClima(datos);
        }
      }
     
    };
    xhr.send();
  };

  

  /**
   * @description Mostrar las temperaturas de la ciudad
   * @param {Object} datos | Contiene los datos de la API
   */
  const mostrarClima = (datos) => {
    //extraer solo la temperatura, temperatura máxima y temperatura mínima
    let {
      main: { temp, "temp_max": tempMax, "temp_min": tempMin}, name
    } = datos;
    //La temperatura está en Kenvin cambiar a Celsius, restar 273.15
    temp= Math.round(temp - 273.15); //cambiar a centígrados
    tempMax=Math.round(tempMax-273.15)
    tempMin=Math.round(tempMin-273.15)
 //crear el párrafo
    if (resultado.children.length == 0) {

      const titName = document.createElement("h2");
     // parrafoName.classList.add("temp-min-max");
      
      const parrafo1 = document.createElement("p");
      parrafo1.classList.add("temp-main");

      const parrafo2 = document.createElement("p");
      parrafo2.classList.add("temp-min-max");

     
      resultado.append(titName, parrafo1, parrafo2);
    }

    resultado.children[0].innerHTML = `El clima en ${name } es:`;
    resultado.children[1].innerHTML = `${temp}&#176;C`;
    resultado.children[2].innerHTML = `Max ${tempMax}&#176; - Min ${tempMin}&#176;C` ;
    
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
