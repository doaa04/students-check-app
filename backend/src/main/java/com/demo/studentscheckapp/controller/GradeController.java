package com.demo.studentscheckapp.controller;

import com.demo.studentscheckapp.dto.GradeRequest;
import com.demo.studentscheckapp.dto.StudentRequest;
import com.demo.studentscheckapp.model.Grade;
import com.demo.studentscheckapp.model.Student;
import com.demo.studentscheckapp.service.GradeService;
import com.demo.studentscheckapp.service.StudentService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class GradeController {
    private final GradeService gradeService;
    private final StudentService studentService;

    public GradeController(GradeService gradeService, StudentService studentService) {
        this.gradeService = gradeService;
        this.studentService = studentService;
    }

    @PostMapping("/students/{id}/grades")
    public ResponseEntity<Grade> addGrade(@RequestBody GradeRequest gradeRequest, @PathVariable int id) {
        Grade grade = new Grade();
        try {
            Student student = studentService.getStudent(id);
            grade.setStudent(student);
            grade.setCourseName(gradeRequest.getCourse());
            grade.setGradeValue(gradeRequest.getGrade());
            gradeService.addGrade(grade);
            return ResponseEntity.ok(grade);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
