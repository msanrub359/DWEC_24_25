"use strict";
const EjemploProvincias = (() => {
  const init = () => {
    mostrarProv();
  };

  const mostrarProv = () => {
    fetch(
      "https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json"
    )
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw "Error en la comunicación";
        }
      })

      .then((data) => {
        //ordenar ascedente
        data.sort((a, b) => {
          return a.nm.localeCompare(b.nm);
        });
        //cargar en el select
        data.forEach((element) => {
          const option = document.createElement("option");
          option.setAttribute("id", element.id);
          option.textContent = element.nm;
          document.querySelector("#provincias").append(option);
        });
        establecerEvento();
        //evento change
      })
      .catch((error) => {
        console.log(error);
      });
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

  return {
    init,
  };
})();

window.addEventListener("DOMContentLoaded", EjemploProvincias.init);
