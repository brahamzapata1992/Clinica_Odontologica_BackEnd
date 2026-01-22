package com.example.Clinica_Odontologica_DH.Service.Interface;

import com.example.Clinica_Odontologica_DH.Model.DTO.OdontologoDTO;

import java.util.Set;

public interface IOdontologoService {

    void crearOdontologo(OdontologoDTO odontologoDTO);
    OdontologoDTO leerOdontologo(Long id);
    void modificarOdontologo(OdontologoDTO odontologoDTO);
    void eliminarOdontologo(Long id);
    Set<OdontologoDTO> getTodos();

}
