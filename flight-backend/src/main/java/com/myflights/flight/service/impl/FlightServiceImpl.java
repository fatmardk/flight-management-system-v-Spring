package com.myflights.flight.service.impl;

import com.myflights.flight.dto.FlightDto;
import com.myflights.flight.entity.Flight;
import com.myflights.flight.exception.ResourceNotFoundException;
import com.myflights.flight.mapper.FlightMapper;
import com.myflights.flight.repository.FlightRepository;
import com.myflights.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository flightRepository;

    @Override
    public FlightDto createFlight(FlightDto flightDto){
        Flight flight = FlightMapper.mapToFlight(flightDto);
        Flight savedFlight=flightRepository.save(flight);
        return FlightMapper.mapToFlightDto(savedFlight);
    }

    @Override
    public List<FlightDto> getAllFlights() {
        List<Flight> flights=flightRepository.findAll();
        return flights.stream().map((flight -> FlightMapper.mapToFlightDto(flight))).collect(Collectors.toList());
    }

    @Override
    public FlightDto getFlightById(int flightId) {
        Flight flight = flightRepository.findById(flightId).orElseThrow(() -> new ResourceNotFoundException("Flight Not Found : "+flightId));
        return FlightMapper.mapToFlightDto(flight);
    }

    @Override
    public FlightDto updatedFlight(int flightId,FlightDto updateFlight) {
        Flight flight = flightRepository.findById(flightId)
                .orElseThrow(() -> new ResourceNotFoundException("Flight Not Found : "+flightId));
        flight.setDepartureCity(updateFlight.getDepartureCity());
        flight.setArrivalCity(updateFlight.getArrivalCity());
        flight.setDepartureTime(updateFlight.getDepartureTime());
        flight.setArrivalTime(updateFlight.getArrivalTime());
        flight.setBusiness_seatCapacity(updateFlight.getBusiness_seatCapacity());
        flight.setStandart_seatCapacity(updateFlight.getStandart_seatCapacity());
        flight.setPrice(updateFlight.getPrice());
        Flight savedFlight=flightRepository.save(flight);
        return FlightMapper.mapToFlightDto(savedFlight);
    }

    @Override
    public void deleteFlight(int flightId) {
        Flight flight = flightRepository.findById(flightId)
                .orElseThrow(() -> new ResourceNotFoundException("Flight Not Found : "+flightId));
        flightRepository.delete(flight);
    }

    @Override
    public List<FlightDto> findByDepartureCityAndArrivalCity(String source, String destination) {
        List<Flight> flights = flightRepository.findByDepartureCityAndArrivalCity(source, destination);
        return flights.stream()
                .map(FlightMapper::mapToFlightDto)
                .collect(Collectors.toList());
    }


}
