"use strict"
//declaración variables y constantes
const fechaHoy=new Date(); //fecha del sistema
const fechaMilis=new Date(676767676767676); //en milisegundos
const fechaCadena=new Date('12/12/2023');
const fechaParam=new Date(2023,8,25,12,23,43);

//mostrar fechas
document.writeln(`La fecha de hoy es ${fechaHoy}`);
document.writeln(`<br>La fecha en milisengundos es ${fechaMilis}`);
document.writeln(`<br>La fecha de cadena es ${fechaCadena}`);
document.writeln(`<br>La fecha de con Parámetros es ${fechaParam}`);

//mostrar fecha con diferentes formatos
document.writeln(`<br>----Fecha con Formatos<br>`);
document.writeln(`La fecha de hoy es ${fechaHoy.toLocaleDateString()}<br>`);
document.writeln(`La fecha de hoy es ${fechaHoy.toLocaleDateString("es-Es", {
    day:    'numeric',
    year:   'numeric',
    month:  'long',
    weekday:'short'
})}`);
document.writeln(`<br>La fecha en milisengundos es ${fechaMilis.toDateString()}`);
document.writeln(`<br>La fecha de cadena es ${fechaCadena.getDate()}-${fechaCadena.getMonth()+1}-${fechaCadena.getFullYear()}`);
document.writeln(`<br>La fecha de con Parámetros es ${fechaParam.toLocaleTimeString()}`);

//sumar 24 días a la fecha actual
fechaHoy.setDate(fechaHoy.getDate()+24);
document.writeln(`<br>La fecha de hoy sumando 24 días ${fechaHoy.toLocaleDateString()}`);

// //mostrar los días que hay entre dos fechas 

const diasResta=fechaHoy-new Date();
console.log(diasResta); //los milisegundos
document.writeln(`<br>Los días que transcurren entre ${new Date().toLocaleDateString()}  y ${fechaHoy.toLocaleDateString()} es ${Math.round(diasResta/1000/60/60/24)} días`);