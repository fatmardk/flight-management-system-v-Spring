package com.myflights.flight.repository;

import com.myflights.flight.entity.Reservation;
import com.myflights.flight.entity.User;
import com.myflights.flight.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    List<Reservation> findByUser(User user);
    List<Reservation> findByFlight(Flight flight);
}
