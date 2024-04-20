package edu.kistehen.dto.visit;

import edu.kistehen.model.RecurrenceType;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class ScheduleVisitDto {
    private LocalDateTime when;
    private LocalDateTime when2;
    private String clientId;

    private RecurrenceType recurrence;
}
