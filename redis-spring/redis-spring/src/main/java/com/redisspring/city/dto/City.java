package com.redisspring.city.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class City {

    private String zip;
    private String city;
    private String stateName;
    private int temperature;

}

/*

{
   "zip":"10001",
   "lat":40.75065,
   "lng":-73.99718,
   "city":"New York",
   "stateId":"NY",
   "stateName":"New York",
   "population":24117,
   "density":15153.7,
   "temperature":74
}

 */