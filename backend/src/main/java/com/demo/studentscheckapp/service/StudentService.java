package com.demo.studentscheckapp.service;

import com.demo.studentscheckapp.model.Grade;
import com.demo.studentscheckapp.model.Student;
import com.demo.studentscheckapp.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void createStudent(Student student) {
        studentRepository.save(student);
    }

    public List<Grade> getStudentGrades(int id) {
        Student student = getStudent(id);
        return student.getGrades();
    }

    public Student getStudent(int id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));
    }
}
