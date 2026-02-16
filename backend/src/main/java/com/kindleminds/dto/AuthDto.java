package com.kindleminds.dto;

import lombok.Data;

public class AuthDto {
    @Data
    public static class LoginRequest {
        private String email;
        private String password;
    }

    @Data
    public static class SignupRequest {
        private String name;
        private String email;
        private String password;
        private String phone;
        private String role; // "ADMIN", "PARENT", "TEACHER"
    }

    @Data
    public static class JwtResponse {
        private String token;
        private String type = "Bearer";
        private String id;
        private String email;
        private String role;

        public JwtResponse(String accessToken, String id, String email, String role) {
            this.token = accessToken;
            this.id = id;
            this.email = email;
            this.role = role;
        }
    }
}
