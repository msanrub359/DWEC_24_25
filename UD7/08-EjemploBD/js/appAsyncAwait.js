"use strict";

const Can = (() => {
  const init = () => {
    document.querySelectorAll("#first, #all").forEach((elemento) => {
      elemento.addEventListener("click", mostrar);
    });
  };

  const mostrar = async (e) => {
    let parametro = "perro=";
    if (e.target.getAttribute("id") == "first") {
      parametro += "111A";
    }
    try {
      const response = awaitfetch(`./php/perros.php?${parametro}`);
      if (response.status == 404) {
        Swal.fire(`No existe el fichero perros.php`); // Mensaje detallado de la API
      }
      if (response.status == 200) {
        const datos = await response.json();
        //elimina las filas
        document
          .querySelector("tbody")
          .querySelectorAll("tr")
          .forEach((element) => {
            element.remove();
          });

        datos.data.forEach((elemento) => {
          const fila = document.createElement("tr");

          const colChip = document.createElement("td");
          colChip.textContent = elemento.chip;

          const colNombre = document.createElement("td");
          colNombre.textContent = elemento.nombre;

          const colRaza = document.createElement("td");
          colRaza.textContent = elemento.raza;

          const colFechaNac = document.createElement("td");
          colFechaNac.textContent = elemento.fechaNac;

          fila.append(colChip, colNombre, colRaza, colFechaNac);
          document.querySelector("tbody").append(fila);
        });
      }
    } catch (error) {}
  };

  return {
    init,
  };
})();
document.addEventListener("DOMContentLoaded", Can.init);
