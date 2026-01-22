/*----- Eliminando Bienvenida-----*/
const eliminarBienvenida = document.querySelector(".empezar");
const claseAEliminar = document.querySelector(".opciones-izq");
const claseAEliminarBiemvenida = document.querySelector(".opciones-der");

eliminarBienvenida.addEventListener("click", function() {
  claseAEliminar.style.display = "block";
  claseAEliminarBiemvenida.style.display = "none";

});



