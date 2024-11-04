"use strict";

//declaraciones de variables y funciones
let aciertos = 0, //contador de aciertos
  fallos = 0, //contador de fallos
  velocidad = 1500, //velocidad 1500 milisegundos
  intervalo,
  pausa = false; //objeto del cronómetro
let cuadrado, areaJuego, coordTapiz;

window.addEventListener("DOMContentLoaded", () => {
  //establecer evento click al cuadrado
  cuadrado = document.getElementById("cuadrado");
  cuadrado.addEventListener("click", puntuar);
  //establecer el evento keyp al documento principal
  document.addEventListener("keydown", accionesTeclado);
  //establecer evento click al área del juego
  areaJuego = document.getElementById("areaJuego");
  areaJuego.addEventListener("click", falloJuego);
  //establecer el evento click al botón reiniciar
  document.getElementById("reiniciar").addEventListener("click", reiniciar)
  //extraer coordenadas del área de juego
  //getBoundingClientRect() contiene información sobre las dimensiones y la posición del objeto
  coordTapiz = areaJuego.getBoundingClientRect();
  console.log(coordTapiz);
  //mover el cuadrado
  intervalo = setInterval(moverCuadrado, velocidad);
});
/**
 * @description se ejecutará al pulsar click sobre el cuadrado
 */
const puntuar = () => {
  //aciertos++;
  //mostrar puntuación en el tablero
  if (!pausa) {
    document.getElementById("puntuacion").textContent = ++aciertos;
    //cada 3 aciertos, subimos velocidad (bajar tiempo)
    if (aciertos % 3 ===0){
        masVelocidad(); //aumentar velocidad
    }
   
  }
};
const masVelocidad=()=>{
    velocidad-=300;
    //anular el intervalo
    clearInterval(intervalo)
    //establecer el nuevo intervalo
    intervalo=setInterval(moverCuadrado, velocidad)
}
/**
 * @description se ejecutará al pulsar una tecla sobre el documento
 */
const accionesTeclado = (e) => {
  console.log(e);
  if (e.key.toLocaleUpperCase() == "P") {
    //pausar el movimiento del cuadrado
    clearInterval(intervalo); //eliminar el intervalo
    pausa = true;
  } else if (e.key.toLocaleUpperCase() == "R") {
    //reiniciar el movimiento
    if (pausa) {
      intervalo = setInterval(moverCuadrado, velocidad);
      pausa = false;
    }
  } else if (e.code === "Space") {
    //el valor máx para el color hexadecimal es 16777215
    if (!pausa) {
      //si no está pausado
      const colorRandom = Math.floor(Math.random() * 16777215).toString(16);
      cuadrado.style.backgroundColor = `#${colorRandom}`; //cambiar color fondo
    }
  }
};
/**
 * @description se ejecutará al pulsar click sobre el tapiz de juego
 */
const falloJuego = (e) => {
  console.log(e);
  if (e.target.id !=="cuadrado"){
    fallos++;
    //comprar fin de juego 10 fallos
    if (fallos === 10){
      finJuego();
    }
  }
};
/**
 * @description finaliza el juego
 */
const finJuego=()=>{
 //parar el intervalo
 clearInterval(intervalo);
 //hacer visible el párrafo y el botón
 document.getElementById("mensaje").classList.remove("hidden");
 document.getElementById("reiniciar").classList.remove("hidden");
 //añadir puntuación al span
 document.getElementById("final").textContent=aciertos;
 //ocultar el cuadrado
 cuadrado.style.display="none";

}
const reiniciar=()=>{
  //inicializar contadores
  aciertos=0;
  fallos=0;
  velocidad=1500;
  //poner el marcador a 0
  document.getElementById("puntuacion").textContent=aciertos;
  //mostrar cuadrado
  cuadrado.style.display="block";
  //ocultar las etiquetas de fin de juego
  document.getElementById("mensaje").classList.add("hidden");
  document.getElementById("reiniciar").classList.add("hidden");
  //establecer el intervalo
  intervalo=setInterval(moverCuadrado, velocidad)

}
const moverCuadrado = () => {
  const maxX = coordTapiz.width - cuadrado.offsetWidth;
  const maxY = coordTapiz.height - cuadrado.offsetHeight;
  //calcular de forma aletoria el top y left
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  //mover el cuadrado modificando las propiedad left (izq-der) y top (arr-abj)
  cuadrado.style.left = `${randomX}px`;
  cuadrado.style.top = `${randomY}px`;
};
