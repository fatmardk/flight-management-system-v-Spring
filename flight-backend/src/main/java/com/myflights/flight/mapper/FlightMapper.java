package com.myflights.flight.mapper;

import com.myflights.flight.dto.FlightDto;
import com.myflights.flight.entity.Flight;
import com.myflights.flight.entity.User;

public class FlightMapper {

    public static FlightDto mapToFlightDto(Flight flight) {
        return new FlightDto(
                flight.getFlightId(),
                flight.getDepartureCity(),
                flight.getArrivalCity(),
                flight.getDepartureTime(),
                flight.getArrivalTime(),
                flight.getStandart_seatCapacity(),
                flight.getBusiness_seatCapacity(),
                flight.getPrice(),
                UserMapper.mapToUserDto(flight.getCreatedBy()) // CreatedBy (User) mapping
        );
    }

    public static Flight mapToFlight(FlightDto flightDto) {
        return new Flight(
                flightDto.getFlightId(),
                flightDto.getDepartureCity(),
                flightDto.getArrivalCity(),
                flightDto.getDepartureTime(),
                flightDto.getArrivalTime(),
                flightDto.getStandart_seatCapacity(),
                flightDto.getBusiness_seatCapacity(),
                flightDto.getPrice(),
                UserMapper.mapToUser(flightDto.getCreatedBy()) // CreatedBy (User) mapping
        );
    }
}
