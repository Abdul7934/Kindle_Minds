package com.kindleminds.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Data
@Document(collection = "teachers")
public class Teacher {
    @Id
    private String id;
    private String userId; // Link to User collection
    private String qualification;
    private Integer experience;
    private String assignedClass;
    private LocalDate joiningDate;
}
