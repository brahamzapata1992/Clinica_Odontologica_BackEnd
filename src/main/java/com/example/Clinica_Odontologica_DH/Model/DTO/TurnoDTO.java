package com.example.Clinica_Odontologica_DH.Model.DTO;
import com.example.Clinica_Odontologica_DH.Model.Odontologo;
import com.example.Clinica_Odontologica_DH.Model.Paciente;
import lombok.*;

import java.sql.Time;
import java.util.Date;

@Getter
@Setter
public class TurnoDTO {

    private Long id;
    private String fechaIngreso;
    private String hora;
    private Paciente paciente;
    private Odontologo odontologo;

}
