package com.myflights.flight.mapper;

import com.myflights.flight.dto.UserDto;
import com.myflights.flight.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getRole()
        );
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getUserId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRole());
    }


}
