package edu.kistehen.controller;

import edu.kistehen.dto.client.ClientLongDto;
import edu.kistehen.dto.client.ClientRegisterDto;
import edu.kistehen.dto.client.ClientUpdateDto;
import edu.kistehen.dto.client.ClientShortDto;
import edu.kistehen.dto.visit.ScheduleVisitDto;
import edu.kistehen.mapper.ClientMapper;
import edu.kistehen.model.Client;
import edu.kistehen.service.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@Tag(name="Clients")
@RequestMapping("/api/clients")
@Slf4j
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientMapper clientMapper;

    @GetMapping
    public Collection<ClientLongDto> listClients() {
        return clientMapper.modelsToDtos(clientService.getAll());
    }

    @GetMapping("/{clientId}")
    public ClientLongDto getClient(@PathVariable("clientId") String clientId) {
        return clientMapper.modelToDto(clientService.getById(clientId));
    }

    @PostMapping
    public ClientLongDto registerClient(@RequestBody ClientRegisterDto regDto) {
        Client client = clientMapper.dtoToModel(regDto);
        client.setSold(0);
        client.setSize("SMALL");
        log.info("Client registered: " + client);
        return clientMapper.modelToDto(clientService.save(client));
    }

    @DeleteMapping("/{clientId}")
    public boolean deleteClient(@PathVariable("clientId") String id) {
        return false;
    }

    @PutMapping("/{clientId}")
    public ClientShortDto updateClient(@PathVariable("clientId") String id, @RequestBody ClientUpdateDto agent) {
        return new ClientShortDto();
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
