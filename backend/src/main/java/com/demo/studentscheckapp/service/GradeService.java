package com.demo.studentscheckapp.service;

import com.demo.studentscheckapp.model.Grade;
import com.demo.studentscheckapp.model.Student;
import com.demo.studentscheckapp.repository.GradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradeService {
    private final GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public void addGrade(Grade grade) {
        gradeRepository.save(grade);
    }
}
