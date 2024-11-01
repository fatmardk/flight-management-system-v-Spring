package com.myflights.flight.controller;


import com.myflights.flight.dto.ReservationDto;
import com.myflights.flight.service.ReservationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    private ReservationService reservationService;


    @PostMapping
    public ResponseEntity<ReservationDto> createReservation(@RequestBody ReservationDto reservationDto) {
        ReservationDto savedReservation = reservationService.crateReservation(reservationDto);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ReservationDto> getReservationById(@PathVariable("id") int reservationId) {
        ReservationDto reservationDto = reservationService.getReservationById(reservationId);
        return ResponseEntity.ok(reservationDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ReservationDto>> getAllReservations() {
        List<ReservationDto> reservations = reservationService.getAllReservations();
        return ResponseEntity.ok(reservations);
    }

    @PutMapping("{id}")
    public ResponseEntity<ReservationDto> updateReservation(@PathVariable("id") int reservationId, @RequestBody ReservationDto updatedReservation) {
        ReservationDto savedReservation = reservationService.updateReservation(reservationId, updatedReservation);
        return ResponseEntity.ok(savedReservation);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable("id") int reservationId) {
        reservationService.deleteReservation(reservationId);
        return new ResponseEntity<>("Reservation successfully deleted", HttpStatus.OK);
    }

    @GetMapping("{user_id}/{id}") //???????
    public ResponseEntity<ReservationDto> getReservationById(@PathVariable("user_id") int userId, @PathVariable("id") int reservationId) {
        ReservationDto reservationDto = reservationService.getReservationById(reservationId);
        return new ResponseEntity<>(reservationDto, HttpStatus.OK);
    }



}
