package edu.kistehen.controller;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.feedback.FeedbackAddDto;
import edu.kistehen.dto.feedback.FeedbackOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Feedback")
@RequestMapping("/api/clients/{clientId}/feedback")
public class FeedbackController {
    @PostMapping
    public FeedbackOutDto addFeedback(@PathVariable("clientId") String clientId, @RequestBody FeedbackAddDto addDto) {
        FeedbackOutDto outDto = new FeedbackOutDto();
        return outDto;
    }

    @GetMapping
    public Collection<FeedbackOutDto> listFeedbacks(@PathVariable("clientId") String clientId) {
        return new ArrayList<>();
    }

    @GetMapping("/{feedbackId}")
    public FeedbackOutDto getFeedback(@PathVariable("clientId") String clientId,
                                      @PathVariable("feedbackId") String feedbackId) {
        return new FeedbackOutDto();
    }

    @DeleteMapping("/feedbackId")
    public boolean addFeedback(@PathVariable("clientId") String clientId, @RequestBody String feedbackId) {
        return true;
    }
}
