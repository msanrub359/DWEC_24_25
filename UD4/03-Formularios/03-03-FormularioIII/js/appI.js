"use strict"

window.addEventListener("DOMContentLoaded",()=>{
    const formulario=document.getElementById("frmFirst");
    const edad=document.getElementById("edad");
    //establecer evento al submit del formulario
    formulario.addEventListener("submit", validar);
    //establecer evento click al botón cancelr
    document.getElementById("cancelar").addEventListener("click", limpiar);
    //establecer el evento blur para comprobar que edad sea >=18
    // edad.addEventListener("blur", comprobarEdad)
    edad.addEventListener("focusout", comprobarEdad);

   
})
const validar=(evento)=>{
   //anular envío
  
   const inputs=validarInputs();
   const radios=validarRadio();
   console.log({inputs});
   console.log(radios);
   if (!inputs && !radios){
    const spinner=document.getElementById("spinner");
    const exito=document.getElementById("exito");
    //visible
    spinner.style.display="block";
    exito.textContent="Datos enviados";
    setTimeout(() => {
        spinner.style.display="none";
        exito.textContent="";
        limpiar();
    }, 3000);
   }
   
   evento.preventDefault();
   

}
const limpiar=()=>{
   
    const inputText=document.getElementsByClassName("classTexto");
    const spanErrores=document.getElementsByName("error");
    const radios=document.getElementsByName("tipo");
     //limpiar los inputs
    console.log(inputText);
    for (const elemento of inputText) {
        elemento.value="" 
    }
    // inputText.forEach(elemento=>{
       
    // })
     //limpiar los errores
     spanErrores.forEach(elemento=>{
        elemento.textContent=""
    });
    //limpiar los checked
    radios.forEach(elemento=>{
        elemento.checked=false
    })
    //establecer el foco en el input de nombre
    document.getElementById("nombre").focus();
}
const comprobarEdad=(e)=>{
    //comprobar que sea mayor de edad
    const error=document.getElementById("erredad")
    if(e.target.value<18){
       error.textContent="La edad debe ser mayor o igual a 18 años"
       e.target.focus(); //establecer el foco
    }else{
        error.innerText="";
    }
}
/**
 * @description función que comprueba si los objetos están vacíos
 * @returns true|false, true si hay errores y false si todo es correcto
 */
const validarInputs=function(){
    //seleccionar todos los objetos cuyo clase sea classTexto
    const inputText=document.getElementsByClassName("classTexto");
    let valErrores=false;
    for (let elemento of inputText){ //recorrer todos los objetos
       
        const error=document.getElementById(`err${elemento.id}`)
    
     if(elemento.value==""){
        error.textContent="El campo es requerido";
        valErrores=true;
       
     }else{
         error.innerText="";
     }
    }
   return valErrores 
}
const validarRadio=function(){
    //seleccionar todos los objetos cuyo atributo name sea texto
    const radios=document.getElementsByName("tipo")
    const errorTexto=document.getElementById(`errtipo`);
    let error=true;
    radios.forEach(elemento=>{
            
        if(elemento.checked){
            error=false;
        }
          
    })
    if (!error){ //si es false, el grupo radio está chequeado
        errorTexto.textContent=""
    }else  {
        errorTexto.textContent="El campo es requerido"
    }
   
    return error; //si no hay errores devuelve false
}