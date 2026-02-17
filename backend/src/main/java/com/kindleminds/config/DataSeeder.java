package com.kindleminds.config;

import com.kindleminds.model.User;
import com.kindleminds.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        User admin = userRepository.findByEmail("admin@kindleminds.com").orElse(null);

        if (admin == null) {
            admin = new User();
            admin.setName("Admin User");
            admin.setEmail("admin@kindleminds.com");
            admin.setRole(User.Role.ADMIN);
            admin.setPhone("0000000000");
            admin.setActive(true);
            System.out.println("Creating new Admin user...");
        } else {
            System.out.println("Updating existing Admin user...");
        }

        // Always reset password to ensure we know it
        admin.setPassword(passwordEncoder.encode("admin123"));
        userRepository.save(admin);

        System.out.println("Admin user ready: admin@kindleminds.com / admin123");

        // Seed Parent User
        User parent = userRepository.findByEmail("parent@kindleminds.com").orElse(null);

        if (parent == null) {
            parent = new User();
            parent.setName("Parent User");
            parent.setEmail("parent@kindleminds.com");
            parent.setRole(User.Role.PARENT);
            parent.setPhone("9876543210");
            parent.setActive(true);
            System.out.println("Creating new Parent user...");
        } else {
            System.out.println("Updating existing Parent user...");
        }

        parent.setPassword(passwordEncoder.encode("parent123"));
        userRepository.save(parent);

        System.out.println("Parent user ready: parent@kindleminds.com / parent123");
    }
}
