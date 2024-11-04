"use script"
/**
 * @description Realizar un script que permita crear un array de 20
 * números, rango -500 a 1500, que permita simular transacciones de dinero
 * los números negativos son gastos y los positivos ingresos
 * Utiliza el método find para encontrar la primera transacción con un gasto
 * Utiliza el método some para verificar si hay una transacción con un ingreso mayor de 900
 * Utiliza el método reduce para calcular el saldo total
 * Utiliza el método sort para ordenar las transacciones de forma descendente (mayor a menor)
 */

//declarar array
const aNumeros = [];

/**
 * @description rellenar el array con números entre 500 y 1000
 */
const rellenarArray = () => { //rellenar el array
  for (let fila = 0; fila < 20; fila++) {
    aNumeros.push(Math.floor(Math.random() * (1500 - (-500)+1) + -500));
  }
};

/**
 * @description muestra el contenido del array
 * @param {string} texto será el mensaje a visualizar
 */
const mostrarArray = (texto) => {
  let resultado="";
  document.writeln(`<br>---${texto}---<br>`);
 
  aNumeros.forEach((element) => {
    resultado+=`${element}, `
  });
  const posicionUlt=resultado.lastIndexOf(',');
  
  document.write(resultado.slice(0,posicionUlt));
};

/**
 * @description muestra los resultados de los métodos find, some, reduce, sort
 * @returns {string} retorna mensajes
 */
const mostrarDatos = () => {
  let resultado='';
  //Utiliza el método find para encontrar la primera transacción con un gasto
  const gasto = aNumeros.find(gasto => gasto < 0);
  resultado+=`<br>El primer gasto es ${gasto}<br>`;
  //Utiliza el método some para verificar si hay alguna transacción con un ingreso mayor de 900
  const ingresoNovecientos = aNumeros.some(ingreso => ingreso > 900);
  resultado+=`¿Hay ingresos mayores a 900? ${ingresoNovecientos?'Sí':'No'}<br>`;

  //Utiliza el método reduce para calcular el saldo total después de todas las transacciones.
  const saldoTotal = aNumeros.reduce((saldo, operacion) =>saldo+operacion,0);
  resultado+=`Saldo total= ${saldoTotal}€<br>`;
  aNumeros.sort((a,b)=>b-a); //ordenar descendentemente
  return resultado
};

//script
rellenarArray();
mostrarArray("Transacciones");
document.write(mostrarDatos());
mostrarArray('Transacciones ordenadas')