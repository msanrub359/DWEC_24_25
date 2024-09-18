"use strict"
// Ejemplo básico sin funciones
// Tarea: Encuentra y corrige los errores del código

// 1. Declarar una variable para almacenar el nombre de una persona
var nombre = Juan; // Error: Falta comillas para declarar un string

// 2. Imprimir el nombre en la consola
console.log("El nombre de la persona es: " + nombre);

// 3. Declarar variables para almacenar la edad y la altura
var edad = 20;
var altura = "170cm"; // Error: La altura debería ser un número

// 4. Intentar sumar edad y altura
var total = edad + altura; // Error: Se está sumando un número y una cadena de texto
console.log("Suma de edad y altura: " + total); // Depurar este valor, no es lo esperado

// 5. Intentar corregir la suma convirtiendo altura a número
var alturaNumerica = parseInt(altura); // Convierte "170cm" a 170 correctamente
var sumaCorregida = edad + alturaNumerica;
console.log("Suma corregida de edad y altura: " + sumaCorregida); // Se espera 190

// 6. Uso de condicionales para comprobar si una persona es mayor de edad
if (edad = 18) { // Error: Aquí se está asignando el valor en lugar de compararlo
    console.log("La persona tiene exactamente 18 años");
} else if (edad > 18) {
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

// 7. Contar del 1 al 5
for (var i = 0; i < 5; i++) {
    console.log("Contador: " + i); // Error: Esto cuenta hasta 4, corrige para llegar a 5
}

// 8. Crear una lista de frutas y acceder a un elemento inexistente
var frutas = ["manzana", "plátano", "naranja"];
console.log("Fruta seleccionada: " + frutas[3]); // Error: No hay fruta en la posición 3

// 9. Intentar acceder a una variable que no ha sido declarada
console.log("El valor de la variable 'apellido' es: " + apellido); // Error: 'apellido' no está definida

// 10. Corregir un número decimal mal formateado
var precio = 20,5; // Error: El separador decimal en JavaScript es el punto, no la coma
console.log("El precio es: " + precio);