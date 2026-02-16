package com.kindleminds.repository;

import com.kindleminds.model.Fee;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface FeeRepository extends MongoRepository<Fee, String> {
    List<Fee> findByStudentId(String studentId);
}
