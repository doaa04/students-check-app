package com.demo.studentscheckapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "grades")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_student", referencedColumnName = "id", nullable = false)
    @Column(name = "id_student")
    private Student student;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "grade_value")
    private float gradeValue;
}
