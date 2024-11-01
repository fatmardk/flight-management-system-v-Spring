package com.myflights.flight.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDto {
    private int reservationId;
    private UserDto user;
    private FlightDto flight;
    private int seatNumber;
    private LocalDateTime reservationDate;
}
