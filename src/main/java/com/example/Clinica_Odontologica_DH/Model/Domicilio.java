package com.example.Clinica_Odontologica_DH.Model;
import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Domicilio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String ciudad;
    @Column
    private String localidad;
    @Column
    private String direccion;
    @Column
    private String telefono;

}
