package com.demo.studentscheckapp.controller;

import com.demo.studentscheckapp.model.Grade;
import com.demo.studentscheckapp.model.Student;
import com.demo.studentscheckapp.repository.StudentRepository;
import com.demo.studentscheckapp.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/students")
    public ResponseEntity<Student> createStudent(@RequestBody String name) {
        Student student = new Student();
        student.setName(name);
        studentService.createStudent(student);
        return ResponseEntity.ok(student);
    }

/*
    record StudentResponse(String name) {

    }

    @GetMapping
    public ResponseEntity<List<Grade>> getStudentGrades(Student student) {
        return null;
    }

    @PostMapping
    public void addStuentGrade(Student student, Grade grade) {
        return;
    }*/
}
