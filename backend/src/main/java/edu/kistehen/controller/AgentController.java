package edu.kistehen.controller;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.agent.AgentShortDto;
import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import edu.kistehen.dto.user.UserOutDto;
import edu.kistehen.mapper.AgentMapper;
import edu.kistehen.model.Agent;
import edu.kistehen.repository.AgentRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Agents")
@RequestMapping("/api/agents")
public class AgentController {

    @Autowired
    AgentMapper agentMapper;

    @Autowired
    AgentRepository agentRepository;

    @GetMapping
    public Collection<AgentShortDto> listAgents() {
        Collection<Agent> agents = agentRepository.findAll();
        return agentMapper.modelsToShortDtos(agents);
    }

    // TODO: get agent by id

    @PostMapping
    public AgentShortDto registerAgent(@RequestBody AgentRegisterDto regDto) {
        Agent agentModel = agentMapper.registerDtoToModel(regDto);

        agentRepository.saveAndFlush(agentModel);

        return agentMapper.modelToShortDto(agentModel);
    }

    @DeleteMapping("/{agentId}")
    public boolean deleteAgent(@PathVariable("agentId") String agentId) {
        return true;
    }

    @PutMapping("/{agentId}")
    public AgentShortDto updateAgent(@PathVariable("agentId") String agentId, @RequestBody AgentRegisterDto regDto) {
        return new AgentShortDto();
    }
}
