package com.example.Clinica_Odontologica_DH.Service;

import com.example.Clinica_Odontologica_DH.Model.DTO.OdontologoDTO;
import com.example.Clinica_Odontologica_DH.Repository.IOdontologoRepository;
import com.example.Clinica_Odontologica_DH.Service.Interface.IOdontologoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OdontologoServiceTest {

    @Autowired
    IOdontologoService odontologoService;

    @Test
    public void crearOdontologo(){

        OdontologoDTO odontologo = new OdontologoDTO();
        odontologo.setNombre("Braham");
        odontologo.setApellido("Zapata");
        odontologo.setMatricula("1023917854");

        odontologoService.crearOdontologo(odontologo);
        OdontologoDTO odontologoBraham = odontologoService.leerOdontologo(1L);

        assertTrue(odontologoBraham != null);


    }



}