package com.demo.studentscheckapp.controller;

import com.demo.studentscheckapp.dto.StudentRequest;
import com.demo.studentscheckapp.model.Grade;
import com.demo.studentscheckapp.model.Student;
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
    public ResponseEntity<Student> createStudent(@RequestBody StudentRequest studentRequest) {
        Student student = new Student();
        student.setName(studentRequest.getName());
        studentService.createStudent(student);
        return ResponseEntity.ok(student);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        try {
            return ResponseEntity.ok(studentService.getStudent(id));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/students/{id}/grades")
    public ResponseEntity<List<Grade>> getStudentGrades(@PathVariable int id) {
        try {
            List<Grade> grades = studentService.getStudentGrades(id);
            return ResponseEntity.ok(grades);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
