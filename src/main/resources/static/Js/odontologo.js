/* -------------------------------------------------------------------------- */
/*                                   creador                                  */
/* -------------------------------------------------------------------------- */
const crearOdontologo = document.querySelector(".crear-odontologo");
const cuadroDerPrincipal = document.querySelector(".cuadro-der-principal");

crearOdontologo.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
});

function crearFormulario() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-crear-odontologo';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Crear Odontologo";
    formulario.appendChild(tituloFormulario);

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.name = 'nombre';
    inputNombre.placeholder = 'Nombre';
    inputNombre.required = "Requerido";
    formulario.appendChild(inputNombre);

    const inputApellido = document.createElement('input');
    inputApellido.type = 'text';
    inputApellido.name = 'apellido';
    inputApellido.placeholder = 'Apellido';
    inputApellido.required = "Requerido";
    formulario.appendChild(inputApellido);

    const inputMatricula = document.createElement('input');
    inputMatricula.type = 'text';
    inputMatricula.name = 'matricula';
    inputMatricula.placeholder = 'Matricula';
    formulario.appendChild(inputMatricula);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Crear';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formulariodon = document.getElementById("form-crear-odontologo");
    formulariodon.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
            console.log(data);
        });

        // Realizar la solicitud POST a la API
        fetch('odontologos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                alert("Error al enviar los datos")
                throw new Error('Error al enviar los datos.');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Respuesta de la API:', responseData);
            alert("Tus datos han sido cargados con exito!!");
            formulariodon.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

const botonCrearFormulario = document.querySelector(".crear-odontologo");
botonCrearFormulario.addEventListener('click', crearFormulario);





/* -------------------------------------------------------------------------- */
/*                                  modificar                                 */
/* -------------------------------------------------------------------------- */

const botonModificar = document.querySelector(".modificar-odontologo");

botonModificar.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';

    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
});

function modificarFormulario() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-modificar-odontologo';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Modificar Odontologo";
    formulario.appendChild(tituloFormulario);

    const inputid = document.createElement('input');
    inputid.type = 'text';
    inputid.name = 'id';
    inputid.placeholder = 'Ingrese el ID que necesita modificar';
    inputid.required = "Requerido";
    formulario.appendChild(inputid);

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.name = 'nombre';
    inputNombre.placeholder = 'Nuevo nombre';
    inputNombre.required = "Requerido";
    formulario.appendChild(inputNombre);

    const inputApellido = document.createElement('input');
    inputApellido.type = 'text';
    inputApellido.name = 'apellido';
    inputApellido.placeholder = 'Nuevo apellido';
    inputApellido.required = "Requerido";
    formulario.appendChild(inputApellido);

    const inputMatricula = document.createElement('input');
    inputMatricula.type = 'text';
    inputMatricula.name = 'matricula';
    inputMatricula.placeholder = 'Nueva matricula';
    formulario.appendChild(inputMatricula);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Modificar Odontologo';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formulariodon = document.getElementById("form-modificar-odontologo");
    formulariodon.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(JSON.stringify(data));
        formulariodon.reset();

        // Solicitud PUT a la API
        fetch('odontologos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar los datos.');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Respuesta de la API:', responseData);
            alert("Tus datos han sido modificados con exito!!");
            formulariodon.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

const botonModificarFormulario = document.querySelector(".modificar-odontologo");
botonModificarFormulario.addEventListener('click', modificarFormulario);




/* -------------------------------------------------------------------------- */
/*                                 eliminador                                 */
/* -------------------------------------------------------------------------- */

const botonEliminar = document.querySelector(".eliminar-odontologo");

botonEliminar.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';

    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
});

function eliminarFormulario() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-eliminar-odontologo';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID de tu odontólogo a eliminar.";
    formulario.appendChild(tituloFormulario);

    const inputid = document.createElement('input');
    inputid.type = 'text';
    inputid.name = 'id';
    inputid.placeholder = 'ID';
    inputid.required = "Requerido";
    formulario.appendChild(inputid);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Eliminar Odontologo';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formulariodon = document.getElementById("form-eliminar-odontologo");
    formulariodon.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(JSON.stringify(data));
        formulariodon.reset();

        const id = data['id'];
        const url = `odontologos/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar los datos.');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Respuesta de la API:', responseData);
            alert("Se eliminó tu Odontologo");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

const botonEliminadorFormulario = document.querySelector(".eliminar-odontologo");
botonEliminadorFormulario.addEventListener('click', eliminarFormulario);




/* -------------------------------------------------------------------------- */
/*                                  buscador                                  */
/* -------------------------------------------------------------------------- */

const botonBuscador = document.querySelector(".buscar-odontologo");

botonBuscador.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';

    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
});

function buscarFormulario() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-buscar-odontologo';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID de tu odontólogo.";
    formulario.appendChild(tituloFormulario);

    const inputid = document.createElement('input');
    inputid.type = 'text';
    inputid.name = 'id';
    inputid.placeholder = 'ID';
    inputid.required = "Requerido";
    formulario.appendChild(inputid);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Buscar Odontologo';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formulariodon = document.getElementById("form-buscar-odontologo");
    formulariodon.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const info = {};
        formData.forEach((value, key) => {
            info[key] = value;
        });

        console.log(JSON.stringify(info));
        alert("¡Se encontró tu odontologo!");
        formulariodon.reset();
   
        let dataArray = []; 

        const id = info['id'];
        const url = `odontologos/buscar/${id}`;
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("La solicitud no pudo completarse correctamente.");
    }
    return response.json();
  })
  .then(datos => {
    
    dataArray.push(datos);
    console.log(datos.nombre);
    
    const tabla = document.createElement("table");
    cuadroDerPrincipal.appendChild(tabla);

    const encabezados = document.createElement("tr");
    tabla.appendChild(encabezados);

    const encabezadoID = document.createElement("th");
    encabezadoID.textContent = "ID";
    encabezados.appendChild(encabezadoID);

    const encabezadoNombre = document.createElement("th");
    encabezadoNombre.textContent = "Nombre";
    encabezados.appendChild(encabezadoNombre);
    const encabezadoNombre1 = document.createElement("th");
          
    const encabezadoApellido = document.createElement("th");
    encabezadoApellido.textContent = "Apellido";
    encabezados.appendChild(encabezadoApellido);


    const encabezadoMatricula = document.createElement("th");
    encabezadoMatricula.textContent = "Matricula";
    encabezados.appendChild(encabezadoMatricula);

    const encabezadoEliminar = document.createElement("th");
    encabezadoEliminar.textContent = "Eliminar";
    encabezados.appendChild(encabezadoEliminar);
  

        const filaDatos = document.createElement("tr");
        tabla.appendChild(filaDatos);

        const celdaID = document.createElement("td");
        celdaID.textContent = datos.id;
        filaDatos.appendChild(celdaID);

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = datos.nombre;
        filaDatos.appendChild(celdaNombre);

        const celdaApellido = document.createElement("td");
        celdaApellido.textContent = datos.apellido;
        filaDatos.appendChild(celdaApellido);

        const celdaMatricula = document.createElement("td");
        celdaMatricula.textContent = datos.matricula;
        filaDatos.appendChild(celdaMatricula);


        const celdaEliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {

        const idAEliminar = datos.id;

            fetch(`odontologos/${idAEliminar}`, {
              method: "DELETE",
            })
              .then(response => {
                if (response.ok) {
                  alert(`Se ha eliminado el ID ${idAEliminar} correctamente.`);
                  
                  filaDatos.remove();
                } else {
                  alert(`No se pudo eliminar el ID ${idAEliminar}.`);
                }
            })

        });
        celdaEliminar.appendChild(botonEliminar);
        filaDatos.appendChild(celdaEliminar);
       });
  })
  .catch(error => {
    console.error(error);
  });
    };


const botonBuscadorFormulario = document.querySelector(".buscar-odontologo");
botonBuscadorFormulario.addEventListener('click', buscarFormulario);




/* -------------------------------------------------------------------------- */
/*                        Administrador de Odontologos                        */
/* -------------------------------------------------------------------------- */

const botonListar = document.querySelector(".listar-odontologo");

botonListar.addEventListener("click", function () {
  cuadroDerPrincipal.innerHTML = '';

  fetch('odontologos/listar')
    .then(response => {
      if (!response.ok) {
        throw new Error("La solicitud no pudo completarse correctamente.");
      }
      return response.json();
    })
    .then(data => {
      // Crear la tabla y encabezados
      const tabla = document.createElement("table");
      cuadroDerPrincipal.appendChild(tabla);

      const encabezados = document.createElement("tr");
      tabla.appendChild(encabezados);

      const encabezadoID = document.createElement("th");
      encabezadoID.textContent = "ID";
      encabezados.appendChild(encabezadoID);

      const encabezadoNombre = document.createElement("th");
      encabezadoNombre.textContent = "Nombre";
      encabezados.appendChild(encabezadoNombre);

      const encabezadoApellido = document.createElement("th");
      encabezadoApellido.textContent = "Apellido";
      encabezados.appendChild(encabezadoApellido);

      const encabezadoMatricula = document.createElement("th");
      encabezadoMatricula.textContent = "Matricula";
      encabezados.appendChild(encabezadoMatricula);

      const encabezadoEliminar = document.createElement("th");
      encabezadoEliminar.textContent = "Eliminar";
      encabezados.appendChild(encabezadoEliminar);

      data.forEach(odontologo => {
        const filaDatos = document.createElement("tr");
        tabla.appendChild(filaDatos);

        const celdaID = document.createElement("td");
        celdaID.textContent = odontologo.id;
        filaDatos.appendChild(celdaID);

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = odontologo.nombre;
        filaDatos.appendChild(celdaNombre);

        const celdaApellido = document.createElement("td");
        celdaApellido.textContent = odontologo.apellido;
        filaDatos.appendChild(celdaApellido);

        const celdaMatricula = document.createElement("td");
        celdaMatricula.textContent = odontologo.matricula;
        filaDatos.appendChild(celdaMatricula);

        const celdaEliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          const idAEliminar = odontologo.id;

          fetch(`odontologos/${idAEliminar}`, {
            method: "DELETE",
          })
            .then(response => {
              if (response.ok) {
                alert(`Se ha eliminado el ID ${idAEliminar} correctamente.`);
                filaDatos.remove();
              } else {
                alert(`No se pudo eliminar el ID ${idAEliminar}.`);
              }
            });
        });
        celdaEliminar.appendChild(botonEliminar);
        filaDatos.appendChild(celdaEliminar);
      });
    })
    .catch(error => {
      console.error("Error al obtener datos de la API:", error);
    });
});


