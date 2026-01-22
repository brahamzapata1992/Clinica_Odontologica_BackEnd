package com.example.Clinica_Odontologica_DH.Controller;

import com.example.Clinica_Odontologica_DH.Model.DTO.PacienteDTO;
import com.example.Clinica_Odontologica_DH.Model.Paciente;
import com.example.Clinica_Odontologica_DH.Repository.IPacienteRepository;
import com.example.Clinica_Odontologica_DH.Service.PacienteService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService pacienteService;
    @Autowired
    private IPacienteRepository pacienteRepository;
    @Autowired
    ObjectMapper mapper;

    @PostMapping("/crear")
    public ResponseEntity<Paciente> crearPaciente(@RequestBody PacienteDTO pacienteDTO) {
        Paciente paciente = pacienteService.crearPaciente(pacienteDTO);
        return new ResponseEntity<>(paciente, HttpStatus.CREATED);
    }

    @GetMapping("buscar/{id}")
    public Paciente getPaciente(@PathVariable Long id){
        return pacienteService.leerPaciente(id);

    }

    @PutMapping("/{id}")
    public Paciente modificarPaciente(@PathVariable Long id, @RequestBody PacienteDTO pacienteDTO) {
        return pacienteService.modificarPaciente(id, pacienteDTO);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarPaciente(@PathVariable Long id) {
        Optional<Paciente> paciente = pacienteRepository.findById(id);

        if (paciente.isPresent()) {
            pacienteRepository.deleteById(id);
            return new ResponseEntity<>("Paciente eliminado correctamente", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Paciente no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Paciente>> listarPacientes() {
        List<Paciente> pacientes = pacienteRepository.findAll();
        return new ResponseEntity<>(pacientes, HttpStatus.OK);
    }




}
