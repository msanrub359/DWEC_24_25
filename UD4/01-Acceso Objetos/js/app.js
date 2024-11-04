"use strict"

const acceso=()=>{
    //acceder al objeto cuyo id es nombreId
    const nombre=document.getElementById("nombreId");
    console.log({nombre});
    
    // nombre.type="button"
    console.log(nombre.value);
     console.log(document.getElementById("nombreId").value);
    //acceder por el attributo name
    const nombres=document.getElementsByName("nombre")
    console.log({nombres});
    //mostrar el value de apellidos

    console.log(`nombre byName ${nombres[1].value}`);

    //acceder por el tag
    const nombreTag=document.getElementsByTagName("input");
    //mostrar elementos
    console.log({nombreTag});
    console.log(`Los elementos de nombreTag son ${nombreTag.length}`);
    //acceder al value de apellidos
    console.log(`apellidos Tag input ${nombreTag[1].value}`);
    //acceder por la clase
    const nombreClass=document.getElementsByClassName("controls");
    //mostrar elementos
    console.log({nombreClass});
    //acceder al value apellidos
    console.log(`apellidos class ${nombreClass[1].value}`);
}

//script
acceso();