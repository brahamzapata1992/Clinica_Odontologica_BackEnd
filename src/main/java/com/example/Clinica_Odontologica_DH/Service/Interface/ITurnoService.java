package com.example.Clinica_Odontologica_DH.Service.Interface;

import com.example.Clinica_Odontologica_DH.Model.DTO.TurnoDTO;

import java.util.Set;

public interface ITurnoService {

    void crearTurno(TurnoDTO turnoDTO);
    TurnoDTO leerTurno(Long id);
    void modificarTurno(TurnoDTO turnoDTO);
    void eliminarTurno(Long id);
    Set<TurnoDTO> getTodos();

}
