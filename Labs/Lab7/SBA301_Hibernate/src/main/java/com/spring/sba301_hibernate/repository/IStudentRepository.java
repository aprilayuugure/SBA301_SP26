package com.spring.sba301_hibernate.repository;

import com.spring.sba301_hibernate.pojo.Student;

import java.util.List;

public interface IStudentRepository {
    void save(Student student);
    void update(Student student);
    void delete(Student student);
    Student findById(int id);
    Student findByEmail(String email);
    List<Student> getAll();
}
