package edu.kistehen.controller;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.feedback.FeedbackAddDto;
import edu.kistehen.dto.feedback.FeedbackOutDto;
import edu.kistehen.mapper.FeedbackMapper;
import edu.kistehen.service.FeedbackService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Feedback")
@RequestMapping("/api/clients/{clientId}/feedback")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @Autowired
    private FeedbackMapper feedbackMapper;

    @PostMapping
    public FeedbackOutDto addFeedback(@PathVariable("clientId") String clientId, @RequestBody FeedbackAddDto addDto) {
        return feedbackMapper.modelToDto(feedbackService.addFeedback(feedbackMapper.dtoToModel(addDto)));
    }

    @GetMapping
    public Collection<FeedbackOutDto> listFeedbacks(@PathVariable("clientId") String clientId) {
        return feedbackMapper.modelsToDtos(feedbackService.getFeedBacks());
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
