"use strict";

const EjemploProvincias = (() => {
  const init = () => {
    mostrarProv();
  };
  const mostrarProv = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json"
      );
  
      if (response.status == 200) {
        const data = await response.json();
        //ordenar ascedente
        data.sort((a, b) => a.nm.localeCompare(b.nm));
        //cargar en el select
        data.forEach((element) => {
          const option = document.createElement("option");
          option.setAttribute("id", element.id);
          option.textContent = element.nm;
          document.querySelector("#provincias").append(option);
        });
        establecerEvento();
      } else {
        throw "Error en la comunicación";
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  /**
   * @description establecer el evento change del select de provincias
   */
  const establecerEvento = () => {
    const provincias = document.querySelector("#provincias");
    provincias.addEventListener("change", function () {
      if (provincias.selectedIndex != 0) {
        const idProvincia = provincias.selectedOptions[0].getAttribute("id");
        Swal.fire(`El Id es ${idProvincia}`);
      }
    });
  };
  
  return{
    init
  }
})()
window.addEventListener("DOMContentLoaded", EjemploProvincias.init)

