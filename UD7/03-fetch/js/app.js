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
    fetch (URL)
    .then (response=>{
      if (response.status==200){
        return response.json();
      }else{ //la petición es incorrecta
         mostrarError(`No existe ${city.value} del ${pais.value}`)
      }
    })
    .then (datos=>{
      console.log(datos);
      mostrarClima(datos)
    })
    .catch (error=>{
      console.log(error);
      mostrarError(error)
    })
    
   
      // const {responseJSON: {cod, message}}= error;
      // if (cod == 404){ //la petición es incorrecta
      //   mostrarError(`No existe ${city.value} del ${pais.value}`)
      // }else{ //cuando se produce un fallo del servidor
       
     
  };

  

  /**
   * @description Mostrar las temperaturas de la ciudad
   * @param {Object} datos | Contiene los datos de la API
   */
  const mostrarClima = (datos) => {
    datos.main.temp
    let {main:{temp, temp_min, temp_max}} = datos
    //convertir las temperaturas a Celsius
     temp= Math.round(temp-273.15);
     temp_min = Math.round(temp_min-273.15);
     temp_max = Math.round(temp_max-273.15);
 
     if (resultado.children.length === 0){
     //crear un párrafo para mostrar la temperatura
     const nameCiudad=document.createElement("h2");
     
     const temperatura=document.createElement("p");
     temperatura.classList.add("temp-main");
    
     const tempMin=document.createElement("p");
     tempMin.classList.add("temp-min-max");
     
     const tempMax=document.createElement("p");
     tempMax.classList.add("temp-min-max");
     
     resultado.append(nameCiudad, temperatura, tempMin, tempMax);
     }
     resultado.children[0].textContent =`El clima en ${city.value} es:`;
     resultado.children[1].textContent =`${temp}°C`; //Alt 0176
     resultado.children[2].textContent =`Min ${temp_min}°C`; //Alt 0176
     resultado.children[3].textContent =`Max ${temp_max}°C`; //Alt 0176
    
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
   const limpiarCapaResult=()=>{
    // [...resultado.children] utiliza el spread para convertir a Array
    [...resultado.children].forEach(element => {
        element.textContent="";
    });
   };

  return {
    init,
  };
})();

document.addEventListener("DOMContentLoaded", Weather.init);
