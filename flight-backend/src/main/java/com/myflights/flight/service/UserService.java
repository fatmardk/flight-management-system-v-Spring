package com.myflights.flight.service;

import com.myflights.flight.controller.auth.AuthenticationResponse;
import com.myflights.flight.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {

    //UserDto createUser(UserDto userDto);
    List<UserDto> getAllUsers();
    UserDto getUserById(int id);
    UserDto updateUser(int id, UserDto userDto);
    void deleteUser(int id);
    //AuthenticationResponse login(String username, String password);
    Optional<UserDto> getUserByEmail(String email);
}
