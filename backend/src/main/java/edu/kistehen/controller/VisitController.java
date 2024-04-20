package edu.kistehen.controller;


import edu.kistehen.dto.visit.ScheduleVisitDto;
import edu.kistehen.dto.visit.VisitOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name="Visits")
@RequestMapping("/api/visits")
public class VisitController {

    @PostMapping()
    public VisitOutDto scheduleVisit(@RequestBody ScheduleVisitDto inDto) {
        return new VisitOutDto();
    }

    @DeleteMapping("/{visitId}")
    public boolean deleteVisit(@PathVariable("visitId") String visitId) {
        return true;
    }
}
