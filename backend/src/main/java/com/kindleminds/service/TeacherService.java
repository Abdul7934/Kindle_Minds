package com.kindleminds.service;

import com.kindleminds.model.Teacher;
import java.util.List;

public interface TeacherService {
    Teacher addTeacher(Teacher teacher);

    List<Teacher> getAllTeachers();

    Teacher getTeacherById(String id);

    void deleteTeacher(String id);
}
