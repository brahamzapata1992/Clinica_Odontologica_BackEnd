package com.example.Clinica_Odontologica_DH.Repository;
import com.example.Clinica_Odontologica_DH.Model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPacienteRepository extends JpaRepository<Paciente, Long> {
}
