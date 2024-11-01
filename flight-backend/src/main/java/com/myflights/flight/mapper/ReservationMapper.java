package com.myflights.flight.mapper;

import com.myflights.flight.dto.ReservationDto;
import com.myflights.flight.entity.Reservation;
import com.myflights.flight.entity.User;
import com.myflights.flight.entity.Flight;

public class ReservationMapper {

    public static ReservationDto mapToReservationDto(Reservation reservation) {
        return new ReservationDto(
                reservation.getReservationId(),
                UserMapper.mapToUserDto(reservation.getUser()), // User mapping
                FlightMapper.mapToFlightDto(reservation.getFlight()), // Flight mapping
                reservation.getSeatNumber(),
                reservation.getReservationDate()
        );
    }

    public static Reservation mapToReservation(ReservationDto reservationDto) {
        return new Reservation(
                reservationDto.getReservationId(),
                UserMapper.mapToUser(reservationDto.getUser()), // User mapping
                FlightMapper.mapToFlight(reservationDto.getFlight()), // Flight mapping
                reservationDto.getSeatNumber(),
                reservationDto.getReservationDate()
        );
    }
}
