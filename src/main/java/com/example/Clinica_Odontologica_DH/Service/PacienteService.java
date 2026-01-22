package com.example.Clinica_Odontologica_DH.Service;
import com.example.Clinica_Odontologica_DH.Model.DTO.PacienteDTO;
import com.example.Clinica_Odontologica_DH.Model.Domicilio;
import com.example.Clinica_Odontologica_DH.Model.Paciente;
import com.example.Clinica_Odontologica_DH.Repository.IPacienteRepository;
import com.example.Clinica_Odontologica_DH.Service.Interface.IPacienteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PacienteService  implements IPacienteService {

    @Autowired
    private IPacienteRepository pacienteRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public Paciente crearPaciente(PacienteDTO pacienteDTO) {

        Paciente paciente = mapper.convertValue(pacienteDTO, Paciente.class);

        Domicilio domicilio = new Domicilio();
        domicilio.setCiudad(pacienteDTO.getCiudad());
        domicilio.setLocalidad(pacienteDTO.getLocalidad());
        domicilio.setDireccion(pacienteDTO.getDireccion());
        domicilio.setTelefono(pacienteDTO.getTelefono());

        paciente.setDomicilio(domicilio);

        pacienteRepository.save(paciente);

        return paciente;

    }

    @Override
    public Paciente leerPaciente(Long pacienteId) {
        Optional<Paciente> optionalPaciente = pacienteRepository.findById(pacienteId);
        if (optionalPaciente.isPresent()) {
            return optionalPaciente.get();
        } else {
            throw new EntityNotFoundException("No se encontró un paciente con el ID proporcionado.");
        }
    }

    @Override
    public Paciente modificarPaciente(Long pacienteId, PacienteDTO pacienteDTO) {
        // Buscar el paciente por su ID en la base de datos
        Optional<Paciente> optionalPaciente = pacienteRepository.findById(pacienteId);

        if (optionalPaciente.isPresent()) {
            // Obtener el paciente existente
            Paciente pacienteExistente = optionalPaciente.get();

            // Actualizar los campos del paciente con los valores del DTO
            pacienteExistente.setNombre(pacienteDTO.getNombre());
            pacienteExistente.setApellido(pacienteDTO.getApellido());
            pacienteExistente.setDni(pacienteDTO.getDni());
            pacienteExistente.setFechaIngreso(pacienteDTO.getFechaIngreso());

            // Crear o actualizar el domicilio del paciente
            Domicilio domicilio = pacienteExistente.getDomicilio();
            if (domicilio == null) {
                domicilio = new Domicilio();
            }
            domicilio.setCiudad(pacienteDTO.getCiudad());
            domicilio.setLocalidad(pacienteDTO.getLocalidad());
            domicilio.setDireccion(pacienteDTO.getDireccion());
            domicilio.setTelefono(pacienteDTO.getTelefono());


            // Guardar los cambios en la base de datos
            pacienteExistente.setDomicilio(domicilio);
            return pacienteRepository.save(pacienteExistente);
        } else {
            throw new EntityNotFoundException("No se encontró un paciente con el ID proporcionado.");
        }
    }


    @Override
    public void eliminarPaciente(Long id) {
        pacienteRepository.deleteById(id);
    }

    @Override
    public Set<PacienteDTO> getTodos() {
        List<Paciente> pacientes = pacienteRepository.findAll();
        Set<PacienteDTO> pacientesDTO = new HashSet<>();

        for(Paciente paciente: pacientes){
            pacientesDTO.add(mapper.convertValue(paciente,PacienteDTO.class));
        }
        return pacientesDTO;
    }
}
