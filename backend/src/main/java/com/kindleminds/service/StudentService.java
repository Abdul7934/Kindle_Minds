package com.kindleminds.service;

import com.kindleminds.model.Student;
import java.util.List;
import java.util.Optional;

public interface StudentService {
    Student addStudent(Student student);

    List<Student> getAllStudents();

    Optional<Student> getStudentById(String id);

    List<Student> getStudentsByParent(String parentId);

    Student updateStudent(String id, Student studentDetails);

    void deleteStudent(String id);
}
