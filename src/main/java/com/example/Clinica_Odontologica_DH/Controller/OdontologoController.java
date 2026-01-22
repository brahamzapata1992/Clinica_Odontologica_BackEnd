package com.example.Clinica_Odontologica_DH.Controller;

import com.example.Clinica_Odontologica_DH.Model.DTO.OdontologoDTO;
import com.example.Clinica_Odontologica_DH.Service.Interface.IOdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/odontologos")
public class OdontologoController {

    public void OdontologoControler(IOdontologoService odontologoService) {
        this.odontologoService = odontologoService;
    }


    @Autowired
    IOdontologoService odontologoService;



    @PostMapping
    public ResponseEntity<?> crearOontologo(@RequestBody OdontologoDTO odontologoDTO){
        odontologoService.crearOdontologo(odontologoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("buscar/{id}")
    public OdontologoDTO getOdontologo(@PathVariable Long id){
        return odontologoService.leerOdontologo(id);
    }

    @PutMapping()
    public ResponseEntity<?> modificarOdontologo(@RequestBody OdontologoDTO odontologoDTO){
        odontologoService.modificarOdontologo(odontologoDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarOdontologo(@PathVariable Long id){
        odontologoService.eliminarOdontologo(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @GetMapping("listar")
    public Collection<OdontologoDTO> getOdontologos(){
        return odontologoService.getTodos();
    }


}
