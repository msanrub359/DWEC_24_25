"use strict"
//generar el abecedario con letras mayúsculas, teniendo en cuenta que
//la letra 'A' tiene código ascii 65 y la 'Z' código ascii 90
//utilizar el método fromCharCode del objeto String

document.write(`<h3>---Abecedario---</h3>`);
for (let index = 65; index <=90; index++) {
    //convertir el código ascii a carácter
    document.write(`${String.fromCharCode(index)} `);
    //mostrar Ñ
    if (index==78){
        document.write(`${String.fromCharCode(209)} `);
    }
}

document.write(`<h3>---Abecedario aleatorio---</h3>`);
//mostrar 20 letras del abecedario de forma aleatoria
for (let index = 1; index <=20; index++) {
    //convertir el código ascii a carácter
    const codigo=Math.floor(Math.random()*(90-65+1))+65
    document.write(`${String.fromCharCode(codigo)} `);
   
}