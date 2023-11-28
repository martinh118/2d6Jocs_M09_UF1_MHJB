function abrirPregunta(){
    document.getElementById("pregunta").setAttribute("class", "dialeg");
  }

  function cerrarPregunta(){
    document.getElementById("pregunta").setAttribute("class", "dialeg hidden");
  }
  
  document.getElementById("botonCont").addEventListener("click", abrirPregunta);

  document.getElementById("cancelar").addEventListener("click", cerrarPregunta);