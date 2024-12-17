"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("frmFirst");
  const edad = document.getElementById("edad");
  
  //establecer evento click al botón cancelr
  document.getElementById("cancelar").addEventListener("click", limpiar);
  //establecer el evento blur para comprobar que edad sea >=18
  // edad.addEventListener("blur", comprobarEdad)
  edad.addEventListener("focusout", comprobarEdad);
  activarCaptcha();
  confFormulario();
});
const activarCaptcha = () => {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfVXr8UAAAAAMS-4Ar9OHK7RLug-6H6n_qxwo1L", { action: "submit" })
      .then(function (token) {
        console.log({ token });
        //asignar el token al campo oculto
        document.getElementById("recaptcha").value = token;
      });
  });
};
const validar = (evento) => {
  //anular envío

    const spinner = document.getElementById("spinner");
    const exito = document.getElementById("exito");
    //visible
    spinner.style.display = "block";
    exito.textContent = "Datos enviados";
    setTimeout(() => {
      spinner.style.display = "none";
      exito.textContent = "";
      limpiar();
    }, 3000);
  

  // evento.preventDefault();
};
const limpiar = () => {
  const inputText = document.getElementsByClassName("classTexto");
  const spanErrores = document.getElementsByName("error");
  const radios = document.getElementsByName("tipo");
  //limpiar los inputs
  console.log(inputText);
  for (const elemento of inputText) {
    elemento.value = "";
  }
  // inputText.forEach(elemento=>{

  // })
  //limpiar los errores
  spanErrores.forEach((elemento) => {
    elemento.textContent = "";
  });
  //limpiar los checked
  radios.forEach((elemento) => {
    elemento.checked = false;
  });
  //establecer el foco en el input de nombre
  document.getElementById("nombre").focus();
};
const comprobarEdad = (e) => {
  //comprobar que sea mayor de edad
  const error = document.getElementById("erredad");
  if (e.target.value < 18) {
    error.textContent = "La edad debe ser mayor o igual a 18 años";
    e.target.focus(); //establecer el foco
  } else {
    error.innerText = "";
  }
};



/**
 * @description Establecer la configuración para validar el formulario
 */
const confFormulario=()=>{
     //añadir regla
     $.validator.addMethod("regExp", function(value,element,regla){
      const expresion= new RegExp(regla);
      return this.optional(element) ||expresion.test(value)
     });

    //jquery
    $("#frmFirst").validate({
      errorElement : "em",
      errorPlacement: ((error, element)=>{
        //añadir clase para el elemento erro
        error.addClass("invalid-feedback");
        //if element es radiobutton el mensaje lo muestre al final del div
        if (element.prop("type")=== "radio"){
          error.insertAfter(element.parent("div"));
        }else{
          error.insertAfter(element)
        }
      }),
      highlight: element=>{
        $(element).addClass("is-invalid").removeClass("is-valid")
      },
      unhighlight: element=>{
        $(element).addClass("is-valid").removeClass("is-invalid")
      },
      rules:{
        //el acceso a los elementos debe ser por el atributo name
        nombre: {
          required :true,
          regExp: /^[a-zA-ZnÑ\s]{8,20}$/
        },
        edad :{
          required:true,
          maxlength:3,
          number:true,
          min:18
        },
        tipo: "required",
        provincia:"required"
      },
      messages :{
        nombre:{
          required: "El nombre del cliente no debe estar vacío",
          regExp: ' Debe contener letras y espacios en blanco'
        },
        edad:{
          required: 'La edad del cliente no debe estar vacío',
          maxlength: 'Debe tener como máximo 3 números',
          number: 'Debe ser números'
        }
      },

      //evento submit
      submitHandler: (form)  =>{
        validar();
      } 
    })
}
