package edu.kistehen.service;

import edu.kistehen.model.Client;
import edu.kistehen.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public Collection<Client> getAll() {
        return clientRepository.findAll();
    }

    public Client getById(String id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Client save(Client client) {
        return clientRepository.saveAndFlush(client);
    }
}
