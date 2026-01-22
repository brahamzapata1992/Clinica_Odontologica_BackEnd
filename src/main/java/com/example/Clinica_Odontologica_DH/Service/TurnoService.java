package com.example.Clinica_Odontologica_DH.Service;

import com.example.Clinica_Odontologica_DH.Model.DTO.TurnoDTO;
import com.example.Clinica_Odontologica_DH.Model.Turno;
import com.example.Clinica_Odontologica_DH.Repository.ITurnoRepository;
import com.example.Clinica_Odontologica_DH.Service.Interface.ITurnoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class TurnoService implements ITurnoService {

    @Autowired
    private ITurnoRepository turnoRepository;
    @Autowired
    ObjectMapper mapper;



    private void guardarTurno(TurnoDTO turnoDTO){
        Turno turno = mapper.convertValue(turnoDTO, Turno.class);
        turnoRepository.save(turno);
    }


    @Override
    public void crearTurno(TurnoDTO turnoDTO) {
        guardarTurno(turnoDTO);
    }

    @Override
    public TurnoDTO leerTurno(Long id) {
        Optional<Turno> turno = turnoRepository.findById(id);
        TurnoDTO turnoDTO = null;
        if(turno.isPresent())
            turnoDTO = mapper.convertValue(turno, TurnoDTO.class);

        return turnoDTO;
    }

    @Override
    public void modificarTurno(TurnoDTO turnoDTO) {
        guardarTurno(turnoDTO);
    }

    @Override
    public void eliminarTurno(Long id) {
        turnoRepository.deleteById(id);
    }

    @Override
    public Set<TurnoDTO> getTodos() {
        List<Turno> turnos = turnoRepository.findAll();
        Set<TurnoDTO> turnosDTO = new HashSet<>();

        for(Turno turno: turnos){
            turnosDTO.add(mapper.convertValue(turno,TurnoDTO.class));
        }
        return turnosDTO;
    }

}
