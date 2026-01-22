/* -------------------------------------------------------------------------- */
/*                                   creador                                  */
/* -------------------------------------------------------------------------- */
const crearPaciente = document.querySelector(".crear-paciente");

crearPaciente.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    // Llama a la función para crear el formulario de paciente
    crearFormularioPaciente();
});

function crearFormularioPaciente() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-crear-paciente';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Crear Paciente";
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

    const inputDNI = document.createElement('input');
    inputDNI.type = 'text';
    inputDNI.name = 'dni';
    inputDNI.placeholder = 'DNI';
    inputDNI.required = "Requerido";
    formulario.appendChild(inputDNI);

    const inputFechaingreso = document.createElement('input');
    inputFechaingreso.type = 'text';
    inputFechaingreso.name = 'fechaIngreso';
    inputFechaingreso.placeholder = 'Fecha de Ingreso (year-mm-dd)';
    inputFechaingreso.required = "Requerido";
    formulario.appendChild(inputFechaingreso);

    const inputCiudad = document.createElement('input');
    inputCiudad.type = 'text';
    inputCiudad.name = 'ciudad';
    inputCiudad.placeholder = 'Ciudad';
    inputCiudad.required = "Requerido";
    formulario.appendChild(inputCiudad);

    const inputLocalidad = document.createElement('input');
    inputLocalidad.type = 'text';
    inputLocalidad.name = 'localidad';
    inputLocalidad.placeholder = 'Localidad';
    inputLocalidad.required = "Requerido";
    formulario.appendChild(inputLocalidad);

    const inputDireccion = document.createElement('input');
    inputDireccion.type = 'text';
    inputDireccion.name = 'direccion';
    inputDireccion.placeholder = 'Direccion';
    inputDireccion.required = "Requerido";
    formulario.appendChild(inputDireccion);

    const inputTelefono = document.createElement('input');
    inputTelefono.type = 'text';
    inputTelefono.name = 'telefono';
    inputTelefono.placeholder = 'Telefono';
    inputTelefono.required = "Requerido";
    formulario.appendChild(inputTelefono);

    

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Crear';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioPaciente = document.getElementById("form-crear-paciente");
    formularioPaciente.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
            console.log(data);
        });

        // API
        fetch('pacientes/crear', {
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
            alert("Los datos del paciente se han cargado con éxito!!");
            formularioPaciente.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

/* -------------------------------------------------------------------------- */
/*                                  modificar                                 */
/* -------------------------------------------------------------------------- */

const botonModificarPaciente = document.querySelector(".modificar-paciente");

botonModificarPaciente.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';

    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    // Llama a la función para crear el formulario de modificación de paciente
    modificarFormularioPaciente();
});

function modificarFormularioPaciente() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-modificar-paciente';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Modificar Paciente";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'Ingrese el ID del paciente a modificar';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

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

    const inputDNI = document.createElement('input');
    inputDNI.type = 'text';
    inputDNI.name = 'dni';
    inputDNI.placeholder = 'Nuevo DNI';
    formulario.appendChild(inputDNI);

    const inputFechaIngreso = document.createElement('input');
    inputFechaIngreso.type = 'text';
    inputFechaIngreso.name = 'fechaIngreso';
    inputFechaIngreso.placeholder = 'Nueva Fecha Ingreso (year-mm-dd) ';
    formulario.appendChild(inputFechaIngreso);

    const inputCiudad = document.createElement('input');
    inputCiudad.type = 'text';
    inputCiudad.name = 'ciudad';
    inputCiudad.placeholder = 'Nueva Ciudad';
    formulario.appendChild(inputCiudad);

    const inputLocalidad = document.createElement('input');
    inputLocalidad.type = 'text';
    inputLocalidad.name = 'localidad';
    inputLocalidad.placeholder = 'Nueva Localidad';
    formulario.appendChild(inputLocalidad);

    const inputDireccion = document.createElement('input');
    inputDireccion.type = 'text';
    inputDireccion.name = 'direccion';
    inputDireccion.placeholder = 'Nueva direccion';
    formulario.appendChild(inputDireccion);

    const inputTelefono = document.createElement('input');
    inputTelefono.type = 'text';
    inputTelefono.name = 'telefono';
    inputTelefono.placeholder = 'Nuevo telefono';
    formulario.appendChild(inputTelefono);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Modificar Paciente';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioPaciente = document.getElementById("form-modificar-paciente");
    formularioPaciente.addEventListener('submit', function (event) {
        event.preventDefault();
        
        //capturando el primer id
        const formData = new FormData(event.target);
        let firstIdValue;
    
        for (const [key, value] of formData.entries()) {
            if (key === 'id') {
            firstIdValue = value;
            break; 
            }
        }

        //capturar todos los datos
        const formDataFormulario = new FormData(event.target);
        const data = {};
        formDataFormulario.forEach((value, key) => {
            data[key] = value;
        });

        formularioPaciente.reset();


        const IdAModificar = firstIdValue
        const url = `pacientes/${IdAModificar}`;
        // API 

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontro un paciente con ese ID');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Respuesta de la API:', responseData);
            alert("Los datos del paciente han sido modificados con éxito!!");
            formularioPaciente.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error)
        });
    });
}

/* -------------------------------------------------------------------------- */
/*                                 eliminador                                 */
/* -------------------------------------------------------------------------- */

const eliminarPaciente = document.querySelector(".eliminar-paciente");

eliminarPaciente.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    // Llama a la función para crear el formulario de eliminación de paciente
    eliminarFormularioPaciente();
});

function eliminarFormularioPaciente() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-eliminar-paciente';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID del paciente a eliminar.";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'ID';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Eliminar Paciente';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioPaciente = document.getElementById("form-eliminar-paciente");
    formularioPaciente.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(JSON.stringify(data));
        formularioPaciente.reset();

        const id = data['id'];
        const url = `pacientes/eliminar/${id}`;

        fetch(url, {
            method: "DELETE",
          })
            .then(response => {
              if (response.ok) {
                alert(`Se ha eliminado el ID ${id} correctamente.`);
                filaDatos.remove();
              } else {
                alert(`No se encontro el paciente con ID ${id}.`);
              }
            });
    });
}

/* -------------------------------------------------------------------------- */
/*                                  buscador                                  */
/* -------------------------------------------------------------------------- */

const buscarPaciente = document.querySelector(".buscar-paciente");

buscarPaciente.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
  
    
});

function buscarFormularioPaciente() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-buscar-paciente';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID del paciente.";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'ID';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Buscar Paciente';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioPaciente = document.getElementById("form-buscar-paciente");
    formularioPaciente.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const info = {};
        formData.forEach((value, key) => {
            info[key] = value;
        });

        console.log(JSON.stringify(info));
        alert("¡Se encontró al paciente!");
        formularioPaciente.reset();
   
        let dataArray = []; 

        const id = info['id'];
        const url = `pacientes/buscar/${id}`;
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

            const encabezadoApellido = document.createElement("th");
            encabezadoApellido.textContent = "Apellido";
            encabezados.appendChild(encabezadoApellido);

            const encabezadoDNI = document.createElement("th");
            encabezadoDNI.textContent = "DNI";
            encabezados.appendChild(encabezadoDNI);

            const encabezadofechaIngreso = document.createElement("th");
            encabezadofechaIngreso.textContent = "Fecha Ingreso";
            encabezados.appendChild(encabezadofechaIngreso);

            const encabezadoCiudad = document.createElement("th");
            encabezadoCiudad.textContent = "Ciudad";
            encabezados.appendChild(encabezadoCiudad);

            const encabezadoLocalidad = document.createElement("th");
            encabezadoLocalidad.textContent = "Localidad";
            encabezados.appendChild(encabezadoLocalidad);

            const encabezadoDireccion = document.createElement("th");
            encabezadoDireccion.textContent = "Direccion";
            encabezados.appendChild(encabezadoDireccion);

            const encabezadoTelefono = document.createElement("th");
            encabezadoTelefono.textContent = "Telefono";
            encabezados.appendChild(encabezadoTelefono);

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

            const celdaDNI = document.createElement("td");
            celdaDNI.textContent = datos.dni;
            filaDatos.appendChild(celdaDNI);

            const celdafechaIngreso = document.createElement("td");
            celdafechaIngreso.textContent = datos.fechaIngreso;
            filaDatos.appendChild(celdafechaIngreso);

            const celdaCiudad = document.createElement("td");
            celdaCiudad.textContent = datos.domicilio.ciudad;
            filaDatos.appendChild(celdaCiudad);

            const celdaLocalidad = document.createElement("td");
            celdaLocalidad.textContent = datos.domicilio.localidad;
            filaDatos.appendChild(celdaLocalidad);

            const celdaDireccion = document.createElement("td");
            celdaDireccion.textContent = datos.domicilio.direccion;
            filaDatos.appendChild(celdaDireccion);

            const celdaTelefono = document.createElement("td");
            celdaTelefono.textContent = datos.domicilio.telefono;
            filaDatos.appendChild(celdaTelefono);


            const celdaEliminar = document.createElement("td");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", function () {
    
                const idAEliminar = datos.id;
                console.log(idAEliminar)
    
              fetch(`pacientes/eliminar/${idAEliminar}`, {
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
    console.error(error);
});
};

const botonBuscadorFormularioPaciente = document.querySelector(".buscar-paciente");
botonBuscadorFormularioPaciente.addEventListener('click', buscarFormularioPaciente);

/* -------------------------------------------------------------------------- */
/*                        Administrador de Pacientes                          */
/* -------------------------------------------------------------------------- */

const botonListarPaciente = document.querySelector(".listar-paciente");

botonListarPaciente.addEventListener("click", function () {
  cuadroDerPrincipal.innerHTML = '';

  fetch('pacientes/listar')
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

      const encabezadoDNI = document.createElement("th");
      encabezadoDNI.textContent = "DNI";
      encabezados.appendChild(encabezadoDNI);

      const encabezadoFechaIngreso = document.createElement("th");
      encabezadoFechaIngreso.textContent = "Fecha Ingreso";
      encabezados.appendChild(encabezadoFechaIngreso);

      const encabezadoCiudad = document.createElement("th");
      encabezadoCiudad.textContent = "Ciudad";
      encabezados.appendChild(encabezadoCiudad);

      const encabezadoLocalidad = document.createElement("th");
      encabezadoLocalidad.textContent = "Localidad";
      encabezados.appendChild(encabezadoLocalidad);

      const encabezadoDireccion = document.createElement("th");
      encabezadoDireccion.textContent = "Direccion";
      encabezados.appendChild(encabezadoDireccion);

      const encabezadoTelefono = document.createElement("th");
      encabezadoTelefono.textContent = "Telefono";
      encabezados.appendChild(encabezadoTelefono);

      const encabezadoEliminar = document.createElement("th");
      encabezadoEliminar.textContent = "Eliminar";
      encabezados.appendChild(encabezadoEliminar);

      data.forEach(paciente => {
        const filaDatos = document.createElement("tr");
        tabla.appendChild(filaDatos);

        const celdaID = document.createElement("td");
        celdaID.textContent = paciente.id;
        filaDatos.appendChild(celdaID);

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = paciente.nombre;
        filaDatos.appendChild(celdaNombre);

        const celdaApellido = document.createElement("td");
        celdaApellido.textContent = paciente.apellido;
        filaDatos.appendChild(celdaApellido);

        const celdaDNI = document.createElement("td");
        celdaDNI.textContent = paciente.dni;
        filaDatos.appendChild(celdaDNI);

        const celdaFechaIngreso = document.createElement("td");
        celdaFechaIngreso.textContent = paciente.fechaIngreso;
        filaDatos.appendChild(celdaFechaIngreso);

        const celdaCiudad = document.createElement("td");
        celdaCiudad.textContent = paciente.domicilio.ciudad;
        filaDatos.appendChild(celdaCiudad);

        
        const celdaLocalidad = document.createElement("td");
        celdaLocalidad.textContent = paciente.domicilio.localidad;
        filaDatos.appendChild(celdaLocalidad);

        const celdaDireccion = document.createElement("td");
        celdaDireccion.textContent = paciente.domicilio.direccion;
        filaDatos.appendChild(celdaDireccion);

        const celdaTelefono = document.createElement("td");
        celdaTelefono.textContent = paciente.domicilio.telefono;
        filaDatos.appendChild(celdaTelefono);

        const celdaEliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          
            const idAEliminar = paciente.id;
            console.log(idAEliminar)

          fetch(`pacientes/eliminar/${idAEliminar}`, {
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
