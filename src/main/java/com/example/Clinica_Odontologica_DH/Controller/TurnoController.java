package com.example.Clinica_Odontologica_DH.Controller;

import com.example.Clinica_Odontologica_DH.Model.DTO.TurnoDTO;
import com.example.Clinica_Odontologica_DH.Service.Interface.ITurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/turnos")
public class TurnoController {

    @Autowired
    ITurnoService turnoService;

    @PostMapping
    public ResponseEntity<?> crearTurno(@RequestBody TurnoDTO turnoDTO){
        turnoService.crearTurno(turnoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("buscar/{id}")
    public TurnoDTO getTurno(@PathVariable Long id){
        return turnoService.leerTurno(id);
    }

    @PutMapping
    public ResponseEntity<?> modificarTurno(@RequestBody TurnoDTO turnoDTO){
        turnoService.modificarTurno(turnoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarTurno(@PathVariable Long id){
        turnoService.eliminarTurno(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @GetMapping("listar")
    public Collection<TurnoDTO> getTurnos(){
        return turnoService.getTodos();
    }

}
