package com.myflights.flight.service.impl;

import com.myflights.flight.dto.ReservationDto;
import com.myflights.flight.entity.Reservation;
import com.myflights.flight.entity.User;
import com.myflights.flight.entity.Flight;
import com.myflights.flight.exception.ResourceNotFoundException;
import com.myflights.flight.mapper.ReservationMapper;
import com.myflights.flight.repository.ReservationRepository;
import com.myflights.flight.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public ReservationDto crateReservation(ReservationDto reservationDto) {
        Reservation reservation = ReservationMapper.mapToReservation(reservationDto);
        Reservation savedReservation = reservationRepository.save(reservation);
        return ReservationMapper.mapToReservationDto(savedReservation);
    }

    @Override
    public List<ReservationDto> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map((reservation -> ReservationMapper.mapToReservationDto(reservation))).collect(Collectors.toList());

    }

    @Override
    public ReservationDto getReservationById(int reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));
        return ReservationMapper.mapToReservationDto(reservation);
    }

    @Override
    public void deleteReservation(int reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));
        reservationRepository.delete(reservation);
    }

    @Override
    public ReservationDto updateReservation(int reservationId, ReservationDto updatedReservation) {
        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found"));
        reservation.setSeatNumber(updatedReservation.getSeatNumber());
        reservation.setReservationDate(updatedReservation.getReservationDate());
        Reservation savedReservation = reservationRepository.save(reservation);
        return ReservationMapper.mapToReservationDto(savedReservation);
    }

    @Override
    public List<ReservationDto> getReservationsByUser(User user) {
        List<Reservation> reservations = reservationRepository.findByUser(user);
        return reservations.stream().map((reservation -> ReservationMapper.mapToReservationDto(reservation))).collect(Collectors.toList());

    }

    @Override
    public List<ReservationDto> getReservationsByFlight(Flight flight) {
        List<Reservation> reservations = reservationRepository.findByFlight(flight);
        return reservations.stream().map((reservation -> ReservationMapper.mapToReservationDto(reservation))).collect(Collectors.toList());
    }
}
