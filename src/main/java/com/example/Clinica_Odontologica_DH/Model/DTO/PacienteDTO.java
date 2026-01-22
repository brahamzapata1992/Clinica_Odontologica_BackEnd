package com.example.Clinica_Odontologica_DH.Model.DTO;
import lombok.*;
import java.util.Date;

@Getter
@Setter
public class PacienteDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String dni;
    private Date fechaIngreso;
    private String ciudad;
    private String localidad;
    private String direccion;
    private String telefono;



}
