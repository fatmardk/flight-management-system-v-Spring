package com.myflights.flight.controller;


import com.myflights.flight.dto.FlightDto;
import com.myflights.flight.service.FlightService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/flights")
public class FlightController {
    private FlightService flightService;

    @PostMapping
    public ResponseEntity<FlightDto> createFlight(@RequestBody FlightDto flightDto) {
        FlightDto savedFlight = flightService.createFlight(flightDto);
        return new ResponseEntity<>(savedFlight, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<FlightDto>> getFlights() {
        List<FlightDto> flights= flightService.getAllFlights();
        return ResponseEntity.ok(flights);
    }

    @GetMapping("{id}")
    public ResponseEntity<FlightDto> getFlight(@PathVariable("id")int flightId) {
        FlightDto flightDto = flightService.getFlightById(flightId);
        return ResponseEntity.ok(flightDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<FlightDto> updatedFlight(@PathVariable("id")int flightId, @RequestBody FlightDto updatedFlight) {
        FlightDto flightDto = flightService.updatedFlight(flightId,updatedFlight);
        return ResponseEntity.ok(flightDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFlight(@PathVariable("id")int flightId) {
        flightService.deleteFlight(flightId);
        return ResponseEntity.ok("Flight deleted successfully!");
    }


    @GetMapping("/search")
    public List<FlightDto> findFlightsByRoute(
            @RequestParam("source") String source,
            @RequestParam("destination") String destination) {
        return flightService.findByDepartureCityAndArrivalCity(source, destination);
    }


}
