package com.kindleminds.repository;

import com.kindleminds.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface StudentRepository extends MongoRepository<Student, String> {
    List<Student> findByParentId(String parentId);

    List<Student> findByClassLevel(String classLevel);
}
