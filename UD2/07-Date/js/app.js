"use strict"
//declaración variables y constantes
const fechaHoy=new Date();
const fechaMilis=new Date(676767676767676);
const fechaCadena=new Date('12/12/2023');
const fechaParam=new Date(2023,8,25,12,23,43);

//mostrar fechas
document.write(`La fecha de hoy es ${fechaHoy}`);
document.write(`<br>La fecha en milisengundos es ${fechaMilis}`);
document.write(`<br>La fecha de cadena es ${fechaCadena}`);
document.write(`<br>La fecha de con Parámetros es ${fechaParam}`);

//mostrar fecha con diferentes formatos
document.write(`<br>----Fecha con Formatos<br>`);
document.write(`La fecha de hoy es ${fechaHoy.toLocaleDateString()}`);
document.write(`<br>La fecha en milisengundos es ${fechaMilis.toDateString()}`);
document.write(`<br>La fecha de cadena es ${fechaCadena.getDate()}-${fechaCadena.getMonth()+1}-${fechaCadena.getFullYear()}`);
document.write(`<br>La fecha de con Parámetros es ${fechaParam.toLocaleTimeString()}`);

//sumar 24 días a la fecha actual
fechaHoy.setDate(fechaHoy.getDate()+24);
document.write(`<br>La fecha de hoy sumando 24 días ${fechaHoy.toLocaleDateString()}`);

//mostrar los días que hay entre dos fechas 

const diasResta=fechaHoy-new Date();
console.log(diasResta);
document.write(`<br>Los días que transcurren entre ${new Date().toLocaleDateString()}  y ${fechaHoy.toLocaleDateString()} es ${parseInt(diasResta/1000/60/60/24)} días`);