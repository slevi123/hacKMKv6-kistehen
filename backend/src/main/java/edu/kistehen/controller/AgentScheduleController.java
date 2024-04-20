package edu.kistehen.controller;

import edu.kistehen.dto.visit.VisitOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Agent Schedules")
@RequestMapping("/api/agents/{agentId}/schedules")
public class AgentScheduleController {
    @GetMapping
    public Collection<VisitOutDto> listSchedule(@PathVariable("agentId") Long agentId) {
        return new ArrayList<>();
    }
}
