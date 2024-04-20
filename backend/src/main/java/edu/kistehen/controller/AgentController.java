package edu.kistehen.controller;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.agent.AgentShortDto;
import edu.kistehen.dto.user.UserOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Agents")
@RequestMapping("/api/agents")
public class AgentController {
    @GetMapping
    public Collection<UserOutDto>  listAgents() {
        return new ArrayList<>();
    }

    @PostMapping
    public AgentShortDto registerAgent(@RequestBody AgentRegisterDto regDto) {
        AgentShortDto outDto = new AgentShortDto();
        return new AgentShortDto();
    }

    @DeleteMapping("/{id}")
    public boolean deleteAgent(@PathVariable("id") Long id) {
        return true;
    }

    @PutMapping("/{id}")
    public AgentShortDto updateAgent(@PathVariable("id") Long id, @RequestBody AgentRegisterDto regDto) {
        return new AgentShortDto();
    }
}
