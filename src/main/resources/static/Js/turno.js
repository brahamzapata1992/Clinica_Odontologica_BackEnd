/* -------------------------------------------------------------------------- */
/*                                   creador                                  */
/* -------------------------------------------------------------------------- */
// Agrega un evento click al elemento "crear-turno" y crea el formulario de turno
const crearTurno = document.querySelector(".crear-turno");

crearTurno.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    
    crearFormularioTurno();
});

function crearFormularioTurno() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-crear-turno';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Crear Turno";
    formulario.appendChild(tituloFormulario);

    const inputFechaIngreso = document.createElement('input');
    inputFechaIngreso.type = 'text';
    inputFechaIngreso.name = 'fechaIngreso';
    inputFechaIngreso.placeholder = 'Fecha de Ingreso (year-mm-dd)';
    inputFechaIngreso.required = "Requerido";
    formulario.appendChild(inputFechaIngreso);

    const inputHora = document.createElement('input');
    inputHora.type = 'text';
    inputHora.name = 'hora';
    inputHora.placeholder = 'Hora (hh:mm)';
    inputHora.required = "Requerido";
    formulario.appendChild(inputHora);

    const inputIdPaciente = document.createElement('input');
    inputIdPaciente.type = 'text';
    inputIdPaciente.name = 'paciente';
    inputIdPaciente.placeholder = 'ID paciente';
    inputIdPaciente.required = "Requerido";
    formulario.appendChild(inputIdPaciente);

    const inputidOdontologo = document.createElement('input');
    inputidOdontologo.type = 'text';
    inputidOdontologo.name = 'odontologo';
    inputidOdontologo.placeholder = 'ID odontologo';
    inputidOdontologo.required = "Requerido";
    formulario.appendChild(inputidOdontologo);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Crear';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioTurno = document.getElementById("form-crear-turno");
    formularioTurno.addEventListener('submit', function (event) {
        event.preventDefault();

        //capturar datos

        const fechaIngreso = inputFechaIngreso.value;
        const hora = inputHora.value;
        const idPaciente = inputIdPaciente.value;
        const idOdontologo = inputidOdontologo.value;

        //array de datos
        const data = {
            "fechaIngreso": fechaIngreso,
            "hora": hora,
            "paciente": {"id": parseInt(idPaciente)},
            "odontologo": {"id": parseInt(idOdontologo)}
        };

         // API
         fetch('turnos', {
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
            formularioTurno.reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });

    });
}


/* -------------------------------------------------------------------------- */
/*                                  modificar                                 */
/* -------------------------------------------------------------------------- */

const botonModificarTurno = document.querySelector(".modificar-turno");

botonModificarTurno.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';

    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    // Llama a la función para crear el formulario de modificación de paciente
    modificarFormularioTurno();
});

function modificarFormularioTurno() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-modificar-turno';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Modificar Turno";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'Ingrese el ID del turno a modificar';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

    const inputFechaIngreso = document.createElement('input');
    inputFechaIngreso.type = 'text';
    inputFechaIngreso.name = 'fechaIngreso';
    inputFechaIngreso.placeholder = 'Nueva fecha de Ingreso (year-mm-dd)';
    inputFechaIngreso.required = "Requerido";
    formulario.appendChild(inputFechaIngreso);

    const inputHora = document.createElement('input');
    inputHora.type = 'text';
    inputHora.name = 'hora';
    inputHora.placeholder = 'Nueva hora';
    inputHora.required = "Requerido";
    formulario.appendChild(inputHora);

    const inputIDpaciente = document.createElement('input');
    inputIDpaciente.type = 'text';
    inputIDpaciente.name = 'paciente';
    inputIDpaciente.placeholder = 'Nuevo ID paciente';
    formulario.appendChild(inputIDpaciente);

    const inputidOdontologo = document.createElement('input');
    inputidOdontologo.type = 'text';
    inputidOdontologo.name = 'odontologo';
    inputidOdontologo.placeholder = 'Nuevo ID odontologo';
    formulario.appendChild(inputidOdontologo);

      
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Modificar Paciente';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioTurno = document.getElementById("form-modificar-turno");
    formularioTurno.addEventListener('submit', function (event) {
        event.preventDefault();
        
        
        //capturar datos

        const NuevoIdTurno = inputId.value
        const fechaIngreso = inputFechaIngreso.value;
        const hora = inputHora.value;
        const idPaciente = inputIDpaciente.value;
        const idOdontologo = inputidOdontologo.value;

        //array de datos
        const data = {
            "id": NuevoIdTurno,
            "fechaIngreso": fechaIngreso,
            "hora": hora,
            "paciente": {"id": parseInt(idPaciente)},
            "odontologo": {"id": parseInt(idOdontologo)}
        };
        formularioTurno.reset();

        // API 

        const url = `turnos/`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontro el turno con ese ID');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Respuesta de la API:', responseData);
            alert("Los datos del turno han sido modificados con éxito!!");
            formularioTurno.reset();
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

const eliminarTurno = document.querySelector(".eliminar-turno");

eliminarTurno.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);

    // Llama a la función para crear el formulario de eliminación de paciente
    eliminarFormularioTurno();
});

function eliminarFormularioTurno() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-eliminar-turno';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID del turno a eliminar.";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'ID';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Eliminar Turno';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioTurno = document.getElementById("form-eliminar-turno");
    formularioTurno.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(JSON.stringify(data));
        formularioTurno.reset();

        const id = data['id'];
        const url = `turnos/${id}`;

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
/*                        Administrador de Pacientes                          */
/* -------------------------------------------------------------------------- */

const botonListarTurno = document.querySelector(".listar-turno");

botonListarTurno.addEventListener("click", function () {
  cuadroDerPrincipal.innerHTML = '';

  fetch('turnos/listar')
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

      const encabezadoFecha = document.createElement("th");
      encabezadoFecha.textContent = "Fecha Ingreso";
      encabezados.appendChild(encabezadoFecha);

      const encabezadoHora = document.createElement("th");
      encabezadoHora.textContent = "Hora";
      encabezados.appendChild(encabezadoHora);

      const encabezadoPacienteId = document.createElement("th");
      encabezadoPacienteId.textContent = "Paciente ID";
      encabezados.appendChild(encabezadoPacienteId);

      const encabezadoNombrePaciente = document.createElement("th");
      encabezadoNombrePaciente.textContent = "Nombre Paciente";
      encabezados.appendChild(encabezadoNombrePaciente);

      const encabezadoTelefonoPaciente = document.createElement("th");
      encabezadoTelefonoPaciente.textContent = "Telefono Paciente";
      encabezados.appendChild(encabezadoTelefonoPaciente);

      const encabezadoOdontologoID = document.createElement("th");
      encabezadoOdontologoID.textContent = "Odontologo ID";
      encabezados.appendChild(encabezadoOdontologoID);

      const encabezadoNombreOdontologo = document.createElement("th");
      encabezadoNombreOdontologo.textContent = "NombreOdontologo";
      encabezados.appendChild(encabezadoNombreOdontologo);

      
      const encabezadoEliminar = document.createElement("th");
      encabezadoEliminar.textContent = "Eliminar";
      encabezados.appendChild(encabezadoEliminar);

      data.forEach(turno => {
        const filaDatos = document.createElement("tr");
        tabla.appendChild(filaDatos);

        const celdaID = document.createElement("td");
        celdaID.textContent = turno.id;
        filaDatos.appendChild(celdaID);

        const celdafechaIngreso = document.createElement("td");
        celdafechaIngreso.textContent = turno.fechaIngreso;
        filaDatos.appendChild(celdafechaIngreso);

        const celdaHora = document.createElement("td");
        celdaHora.textContent = turno.hora;
        filaDatos.appendChild(celdaHora);

        const celdaIdpaciente = document.createElement("td");
        celdaIdpaciente.textContent = turno.paciente.id;
        filaDatos.appendChild(celdaIdpaciente);

        const celdaNombrePaciente = document.createElement("td");
        celdaNombrePaciente.textContent = turno.paciente.nombre + " " +turno.paciente.apellido ;
        filaDatos.appendChild(celdaNombrePaciente);

        const celdaTelefono = document.createElement("td");
        celdaTelefono.textContent = turno.paciente.domicilio.telefono;
        filaDatos.appendChild(celdaTelefono);

        
        const celdaidOdontologo = document.createElement("td");
        celdaidOdontologo.textContent = turno.odontologo.id;
        filaDatos.appendChild(celdaidOdontologo);

        const celdanombreOdontologo = document.createElement("td");
        celdanombreOdontologo.textContent = turno.odontologo.nombre + " " + turno.odontologo.apellido;
        filaDatos.appendChild(celdanombreOdontologo);

        
        const celdaEliminar = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          
            const idAEliminar = turno.id;
            console.log(idAEliminar)

          fetch(`turnos/${idAEliminar}`, {
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

/* -------------------------------------------------------------------------- */
/*                                  buscador                                  */
/* -------------------------------------------------------------------------- */

const buscarTurno = document.querySelector(".buscar-turno");

buscarTurno.addEventListener("click", function () {
    cuadroDerPrincipal.innerHTML = '';
    const fondoAzul = document.createElement("div");
    fondoAzul.className = "formulario-box";
    cuadroDerPrincipal.appendChild(fondoAzul);
  
    
    
});

function buscarFormularioTurno() {
    const formularioContainer = document.querySelector('.formulario-box');

    const formulario = document.createElement('form');
    formulario.id = 'form-buscar-turno';

    const tituloFormulario = document.createElement('h2');
    tituloFormulario.textContent = "Ingresa el ID del turno.";
    formulario.appendChild(tituloFormulario);

    const inputId = document.createElement('input');
    inputId.type = 'text';
    inputId.name = 'id';
    inputId.placeholder = 'ID';
    inputId.required = "Requerido";
    formulario.appendChild(inputId);

    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Buscar Turno';
    formulario.appendChild(botonEnviar);

    formularioContainer.appendChild(formulario);

    const formularioTurno = document.getElementById("form-buscar-turno");
    formularioTurno.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const info = {};
        formData.forEach((value, key) => {
            info[key] = value;
        });

        console.log(JSON.stringify(info));
        alert("¡Se encontró el turno!");
        formularioTurno.reset();
   
        let dataArray = []; 

        const id = info['id'];
        const url = `turnos/buscar/${id}`;
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

            const encabezadoFecha = document.createElement("th");
            encabezadoFecha.textContent = "Fecha Ingreso";
            encabezados.appendChild(encabezadoFecha);

            const encabezadoHora = document.createElement("th");
            encabezadoHora.textContent = "Hora";
            encabezados.appendChild(encabezadoHora);

            const encabezadoPacienteId = document.createElement("th");
            encabezadoPacienteId.textContent = "Paciente ID";
            encabezados.appendChild(encabezadoPacienteId);

            const encabezadoNombrePaciente = document.createElement("th");
            encabezadoNombrePaciente.textContent = "Nombre Paciente";
            encabezados.appendChild(encabezadoNombrePaciente);

            const encabezadoTelefonoPaciente = document.createElement("th");
            encabezadoTelefonoPaciente.textContent = "Telefono Paciente";
            encabezados.appendChild(encabezadoTelefonoPaciente);

            const encabezadoOdontologoID = document.createElement("th");
            encabezadoOdontologoID.textContent = "Odontologo ID";
            encabezados.appendChild(encabezadoOdontologoID);

            const encabezadoNombreOdontologo = document.createElement("th");
            encabezadoNombreOdontologo.textContent = "NombreOdontologo";
            encabezados.appendChild(encabezadoNombreOdontologo);

            const encabezadoEliminar = document.createElement("th");
            encabezadoEliminar.textContent = "Eliminar";
            encabezados.appendChild(encabezadoEliminar);

            const filaDatos = document.createElement("tr");
            tabla.appendChild(filaDatos);

            const celdaID = document.createElement("td");
            celdaID.textContent = datos.id;
            filaDatos.appendChild(celdaID);

            const celdafechaIngreso = document.createElement("td");
            celdafechaIngreso.textContent = datos.fechaIngreso;
            filaDatos.appendChild(celdafechaIngreso);

            const celdaHora = document.createElement("td");
            celdaHora.textContent = datos.hora;
            filaDatos.appendChild(celdaHora);

            const celdaIdpaciente = document.createElement("td");
            celdaIdpaciente.textContent = datos.paciente.id;
            filaDatos.appendChild(celdaIdpaciente);

            const celdaNombrePaciente = document.createElement("td");
            celdaNombrePaciente.textContent = datos.paciente.nombre + " " +datos.paciente.apellido ;
            filaDatos.appendChild(celdaNombrePaciente);

            const celdaTelefono = document.createElement("td");
            celdaTelefono.textContent = datos.paciente.domicilio.telefono;
            filaDatos.appendChild(celdaTelefono);

            
            const celdaidOdontologo = document.createElement("td");
            celdaidOdontologo.textContent = datos.odontologo.id;
            filaDatos.appendChild(celdaidOdontologo);

            const celdanombreOdontologo = document.createElement("td");
            celdanombreOdontologo.textContent = datos.odontologo.nombre + " " + datos.odontologo.apellido;
            filaDatos.appendChild(celdanombreOdontologo);


            const celdaEliminar = document.createElement("td");
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", function () {
    
                const idAEliminar = datos.id;
                console.log(idAEliminar)
    
              fetch(`turnos/${idAEliminar}`, {
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

const botonBuscadorFormularioTurno = document.querySelector(".buscar-turno");
botonBuscadorFormularioTurno.addEventListener('click', buscarFormularioTurno);


