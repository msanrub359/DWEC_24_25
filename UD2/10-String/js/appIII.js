"use strict"

// Declaramos una cadena de ejemplo
const texto = "JavaScript es un lenguaje increíble";

// Mostramos la longitud de la cadena
document.write(`<strong>Longitud:</strong> ${texto.length}<br>`);

// Convertimos todo el texto a mayúsculas
document.write(`<strong>Mayúsculas:</strong> ${texto.toUpperCase()}<br>`);

// Convertimos todo el texto a minúsculas
document.write(`<strong>Minúsculas:</strong> ${texto.toLowerCase()}<br>`);

// Obtenemos el carácter en una posición específica (posición 5)
document.write(`<strong>Carácter en la posición 5:</strong> ${texto.charAt(5)}<br>`);

// Obtenemos una parte de la cadena (desde la posición 0 hasta la 10)
document.write(`<strong>Subcadena (0, 10):</strong> ${texto.substring(0, 10)}<br>`);

// Reemplazamos una palabra dentro de la cadena
const textoReemplazado = texto.replace("increíble", "asombroso");
document.write(`<strong>Reemplazo de palabra:</strong> ${textoReemplazado}<br>`);

// Verificamos si una palabra está en la cadena
const palabra = "lenguaje";
const contienePalabra = texto.includes(palabra);
document.write(`<strong>¿Contiene la palabra "${palabra}"?</strong> ${contienePalabra ? "Sí" : "No"}<br>`);

// Encontramos la primera aparición de una palabra
const posicion = texto.indexOf("lenguaje");
document.write(`<strong>Posición de la palabra "lenguaje":</strong> ${posicion}<br>`);

// Dividimos la cadena en un array de palabras
const palabras = texto.split(" ");
document.write(`<strong>Palabras en la cadena:</strong> ${palabras.join(", ")}<br>`);
