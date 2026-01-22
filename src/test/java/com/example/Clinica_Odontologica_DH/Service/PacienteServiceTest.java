package com.example.Clinica_Odontologica_DH.Service;

import com.example.Clinica_Odontologica_DH.Model.DTO.PacienteDTO;
import com.example.Clinica_Odontologica_DH.Model.Paciente;
import com.example.Clinica_Odontologica_DH.Service.Interface.IPacienteService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PacienteServiceTest {

    @Autowired
    private IPacienteService pacienteService;

    @Test
    public void TestCrearPaciente(){

        PacienteDTO pacienteDTO = new PacienteDTO();
        pacienteDTO.setNombre("Braham");
        pacienteDTO.setApellido("Zapata");
        pacienteDTO.setCiudad("Atlanta");

        pacienteService.crearPaciente(pacienteDTO);
        Paciente pacienteBraham = pacienteService.leerPaciente(1L);

        assertTrue(pacienteBraham != null);




    }



}