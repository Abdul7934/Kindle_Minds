package com.kindleminds.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Document(collection = "fees")
public class Fee {
    @Id
    private String id;
    private String studentId;
    private BigDecimal amount;
    private String term;
    private Status status;
    private LocalDate dueDate;
    private LocalDate paymentDate;

    public enum Status {
        PAID, PENDING, OVERDUE
    }
}
