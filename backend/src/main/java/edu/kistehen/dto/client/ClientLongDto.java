package edu.kistehen.dto.client;

import lombok.Data;

@Data
public class ClientLongDto {
    private String id;
    private String name;
    private String email;
    private String city;
    private String county;
    private Double latitude;
    private Double longitude;
    private Integer sold;
    private String size;
}
