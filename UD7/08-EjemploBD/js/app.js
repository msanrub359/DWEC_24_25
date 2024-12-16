"use strict"

const Can = (() => {

    const init =()=>{
        document.querySelectorAll("#first, #all").forEach(elemento =>{
            elemento.addEventListener("click", mostrar)
        })
    }

    const mostrar=(e)=> {
       
      
    
    }
    return {
        init
    }



})()
document.addEventListener("DOMContentLoaded", Can.init);
