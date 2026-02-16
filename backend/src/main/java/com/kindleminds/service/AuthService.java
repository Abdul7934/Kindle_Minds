package com.kindleminds.service;

import com.kindleminds.model.User;
import java.util.Optional;

public interface AuthService {
    User registerUser(User user);

    Optional<User> loginUser(String email, String password);

    Optional<User> findByEmail(String email);
}
