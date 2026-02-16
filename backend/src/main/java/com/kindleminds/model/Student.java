package com.kindleminds.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private LocalDate dob;
    private String gender;

    // Store parent ID directly or use @DBRef depending on preference. using ID for
    // simplicity
    private String parentId;

    private String classLevel;
    private LocalDate admissionDate;
    private String profileImage;
    private Status status;

    public enum Status {
        ACTIVE, ALUMNI, WITHDRAWN
    }
}
