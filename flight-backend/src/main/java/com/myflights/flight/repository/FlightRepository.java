package com.myflights.flight.repository;

import com.myflights.flight.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByDepartureCityAndArrivalCity(String departureCity, String arrivalCity);
    List<Flight> findByDepartureTimeBetween(LocalDateTime start, LocalDateTime end);
}
