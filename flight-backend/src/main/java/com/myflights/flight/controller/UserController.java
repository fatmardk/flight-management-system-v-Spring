package com.myflights.flight.controller;


import com.myflights.flight.dto.UserDto;
import com.myflights.flight.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private UserService userService;


    //Add User Rest Api
    @PostMapping("/login")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto newUser = userService.createUser(userDto);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    //Get ALl Employees Api
    @GetMapping ("/all")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Get User By Id

    @GetMapping("{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable int id) {
        UserDto user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    //update
    @PutMapping("{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable ("id") int userId, @RequestBody UserDto userDto) {
        UserDto updatedUser = userService.updateUser(userId, userDto);
        return ResponseEntity.ok(updatedUser);
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable ("id") int userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("Employee deleted successfully!");
    }



}
