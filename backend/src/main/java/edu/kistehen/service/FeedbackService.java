package edu.kistehen.service;

import edu.kistehen.model.Feedback;
import edu.kistehen.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedBackRepository;

    public Collection<Feedback> getFeedBacks() {
        return feedBackRepository.findAll();
    }

    public Feedback addFeedback(Feedback feedback) {
        return feedBackRepository.save(feedback);
    }
}
