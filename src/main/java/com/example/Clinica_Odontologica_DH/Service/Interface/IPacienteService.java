package com.example.Clinica_Odontologica_DH.Service.Interface;

import com.example.Clinica_Odontologica_DH.Model.DTO.PacienteDTO;
import com.example.Clinica_Odontologica_DH.Model.Paciente;

import java.util.Set;

public interface IPacienteService {

    Paciente crearPaciente(PacienteDTO pacienteDTO);
    Paciente leerPaciente(Long id);
    Paciente modificarPaciente(Long pacienteId, PacienteDTO pacienteDTO);
    void eliminarPaciente(Long id);
    Set<PacienteDTO> getTodos();

}
