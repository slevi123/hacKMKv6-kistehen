package edu.kistehen.controller;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.client.ClientRegisterDto;
import edu.kistehen.dto.client.ClientUpdateDto;
import edu.kistehen.dto.client.ClientshortDto;
import edu.kistehen.dto.user.UserOutDto;
import edu.kistehen.dto.visit.ScheduleVisitDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Clients")
@RequestMapping("/api/clients")
public class ClientController {
    @GetMapping
    public Collection<UserOutDto>  listClients() {
        return new ArrayList<>();
    }

    @GetMapping("/{clientId}")
    public ClientshortDto getClient(@PathVariable("clientId") String clientId) {
        return new ClientshortDto();
    }

    @PostMapping
    public ClientshortDto registerClient(@RequestBody ClientRegisterDto regDto) {
        ClientshortDto outDto = new ClientshortDto();
        return new ClientshortDto();
    }

    @DeleteMapping("/{clientId}")
    public boolean deleteClient(@PathVariable("clientId") String id) {
        return true;
    }

    @PutMapping("/{clientId}")
    public ClientshortDto updateClient(@PathVariable("clientId") String id, @RequestBody ClientUpdateDto agent) {
        return new ClientshortDto();
    }

    @Operation(summary = "Assigns the visit to the agent identified by id.", description = "Descriptions comin...")
    @PutMapping("/{clientId}/assign")
    public boolean assignAgent(@PathVariable("clientId") String clientId, @RequestBody ScheduleVisitDto inDto) {
        return true;
    }

    @PutMapping("/{clientId}/retain")
    public boolean retainAgent(@PathVariable("clientId") String clientId, @RequestBody String agentId,
                               @RequestBody String supervisorId) {
        return true;
    }
}
