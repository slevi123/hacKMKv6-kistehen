package edu.kistehen.dto.client;

import lombok.Data;

@Data
public class ClientShortDto {
    private String id;
    private String name;
    private String email;
    private String city;
    private String county;
}
