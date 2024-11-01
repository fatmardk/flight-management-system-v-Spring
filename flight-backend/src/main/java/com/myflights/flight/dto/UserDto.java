package com.myflights.flight.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Integer role;
}