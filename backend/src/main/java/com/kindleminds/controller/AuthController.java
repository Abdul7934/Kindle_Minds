package com.kindleminds.controller;

import com.kindleminds.dto.AuthDto;
import com.kindleminds.model.User;
import com.kindleminds.security.JwtUtils;
import com.kindleminds.service.AuthService;
import com.kindleminds.service.impl.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

// @CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    AuthService authService;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody AuthDto.LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String role = userDetails.getAuthorities().stream()
                .findFirst().get().getAuthority();

        return ResponseEntity.ok(new AuthDto.JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getEmail(),
                role));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody AuthDto.SignupRequest signUpRequest) {
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setPhone(signUpRequest.getPhone());

        try {
            user.setRole(User.Role.valueOf(signUpRequest.getRole()));
        } catch (IllegalArgumentException e) {
            user.setRole(User.Role.PARENT); // Default to Parent if invalid
        }

        try {
            authService.registerUser(user);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok("User registered successfully!");
    }

    @GetMapping("/debug-reset-admin")
    public ResponseEntity<?> debugResetAdmin() {
        try {
            User admin = authService.findByEmail("admin@kindleminds.com").orElse(null);
            if (admin == null) {
                admin = new User();
                admin.setName("Admin User");
                admin.setEmail("admin@kindleminds.com");
                admin.setRole(User.Role.ADMIN);
                admin.setPhone("0000000000");
                admin.setActive(true);
            }
            // Force reset password
            com.kindleminds.repository.UserRepository userRepo = ((com.kindleminds.service.impl.AuthServiceImpl) authService)
                    .getUserRepository();
            admin.setPassword(
                    new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder().encode("admin123"));
            userRepo.save(admin);

            return ResponseEntity.ok("Admin password forced to 'admin123'. Try login now.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
