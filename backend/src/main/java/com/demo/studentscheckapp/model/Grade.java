package com.demo.studentscheckapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "grades")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "idstudent")
    private long idStudent;

    @Column(name = "coursename")
    private String courseName;

    @Column(name = "gradevalue")
    private float gradeValue;
}
