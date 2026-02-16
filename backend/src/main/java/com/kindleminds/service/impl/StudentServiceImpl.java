package com.kindleminds.service.impl;

import com.kindleminds.model.Student;
import com.kindleminds.repository.StudentRepository;
import com.kindleminds.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> getStudentById(String id) {
        return studentRepository.findById(id);
    }

    @Override
    public List<Student> getStudentsByParent(String parentId) {
        return studentRepository.findByParentId(parentId);
    }

    @Override
    public Student updateStudent(String id, Student studentDetails) {
        return studentRepository.findById(id).map(student -> {
            student.setName(studentDetails.getName());
            student.setDob(studentDetails.getDob());
            student.setGender(studentDetails.getGender());
            student.setClassLevel(studentDetails.getClassLevel());
            student.setProfileImage(studentDetails.getProfileImage());
            student.setStatus(studentDetails.getStatus());
            return studentRepository.save(student);
        }).orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public void deleteStudent(String id) {
        studentRepository.deleteById(id);
    }
}
