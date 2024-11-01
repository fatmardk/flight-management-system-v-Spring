package com.myflights.flight.service;

import com.myflights.flight.dto.FlightDto;
import com.myflights.flight.entity.Flight;
import java.util.List;

public interface FlightService {
    FlightDto createFlight(FlightDto flightDto);
    List<FlightDto> getAllFlights();
    FlightDto getFlightById(int id);
    FlightDto updatedFlight(int flightId,FlightDto flightDto);
    void deleteFlight(int id);
    List<FlightDto> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);
}
