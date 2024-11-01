package com.myflights.flight.service;

import com.myflights.flight.dto.ReservationDto;
import com.myflights.flight.entity.Reservation;
import com.myflights.flight.entity.User;
import com.myflights.flight.entity.Flight;
import java.util.List;

public interface ReservationService {
    ReservationDto crateReservation(ReservationDto reservationDto); // Yeni rezervasyon kaydetme
    List<ReservationDto> getAllReservations(); // Tüm rezervasyonları listeleme
    ReservationDto getReservationById(int reservationId); // Rezervasyonu ID'ye göre alma
    void deleteReservation(int reservationId);
    ReservationDto updateReservation(int reservationId, ReservationDto reservationDto);
    List<ReservationDto> getReservationsByUser(User user); // Kullanıcıya göre rezervasyon bulma
    List<ReservationDto> getReservationsByFlight(Flight flight); // Uçuşa göre rezervasyon bulma
}
