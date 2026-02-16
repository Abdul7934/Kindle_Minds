package com.kindleminds.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "admissions")
public class Admission {
    @Id
    private String id;
    private String parentName;
    private String childName;
    private String email;
    private String phone;
    private Status status;
    private List<String> documents; // URLs to documents
    private LocalDateTime appliedDate;

    public enum Status {
        PENDING, APPROVED, REJECTED
    }
}
