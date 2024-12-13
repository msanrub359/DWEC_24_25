"use strict";

//Patrón módulo
/**
 * Este código define un módulo Weather con una función pública
 *  init, la cual se ejecuta automáticamente cuando el documento
 *  ha terminado de cargar (cuando se dispara el evento DOMContentLoaded).
 *  Al ejecutarse init, imprime "Weather" en la consola.
 */
const Weather = (() => {
  const resultado= document.querySelector(".result-container");
  const pais= document.querySelector("#countrySelect");
  const city =document.querySelector("#cityInput");
  
  /**
   * @description método inicial
   */
  const init = () => {
    const boton=document.querySelector('.btn');
    boton.addEventListener("click", validar);
  };

  const validar = (e) => {
    e.preventDefault();

    //comprobar que los campos no estén vacíos.
    if (city.value === "" || pais.value === ""){
      mostrarError('Todos los campos son obligatorios');
    }else{
      consultarAPIWeather(pais.value);
    }
    
 }
  

  

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
   * @param {String} paisAbr
   */
  const consultarAPIWeather = async (paisAbr) => {
    const API="2f52fa02726085297f9f1665bd255e67";
    const URL= `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${paisAbr}&appid=${API}`
    
    //limpiar capa resultados
    limpiarCapaResult();
    //mostrar spinner
    await crearSpinner();
    //realizar la petición al servidor
    const xhr= new XMLHttpRequest();
    xhr.open("GET",URL,true);
    xhr.onreadystatechange= ()=>{
      if (xhr.readyState === 4){ //la comunicación con el servidor ha finalizado
        const datos=JSON.parse(xhr.responseText);
        console.log(datos);
        const {cod, message} =datos;
        if (cod == 200){ //La petición es correcta
         mostrarClima(datos);
        }else if (cod == 404){ //la petición es incorrecta
          mostrarError(`No existe ${city.value} del ${pais.value}`)
        }else{ //cuando se produce un fallo del servidor
          mostrarError(message)
        }
      }
    }
    xhr.send(); //Inicio de comunicación con el servidor
  };
