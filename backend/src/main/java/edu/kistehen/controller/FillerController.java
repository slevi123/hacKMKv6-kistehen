package edu.kistehen.controller;


import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import edu.kistehen.model.Client;
import edu.kistehen.repository.ClientRepository;
import org.kohsuke.randname.RandomNameGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.util.List;

@RestController
@RequestMapping("/api/fill")
public class FillerController {
    @Autowired
    ClientRepository clientRepository;

    @GetMapping
    public void fill() throws IOException {
        try (InputStream csv = FillerController.class.getResourceAsStream("/hackmk.csv")) {
            try (Reader reader = new InputStreamReader(csv)) {
                try (CSVReader csvReader = new CSVReader(reader)) {
                    List<String[]> clients = csvReader.readAll();

                    RandomNameGenerator rnd = new RandomNameGenerator(0);

                    for (String[] attributes : clients) {
                        Client client = new Client();

                        client.setName(rnd.next());
                        client.setCity(attributes[1]);
                        client.setCounty(attributes[2]);
                        client.setLatitude(attributes[3]);
                        client.setLongitude(attributes[4]);
                        client.setSold(Integer.parseInt(attributes[5]));
                        client.setSize(attributes[6]);
                        client.setEmail(rnd.next() + "@yoyo.xyz");

                        clientRepository.save(client);
                    }

                    clientRepository.flush();
                } catch (CsvException e) {
                    throw new RuntimeException(e);
                }
            }
        }

    }
}
