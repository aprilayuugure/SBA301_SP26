package com.spring.sba301_hibernate.service;

import com.spring.sba301_hibernate.pojo.Student;

import java.util.List;

public interface IStudentService {
    public List<Student> getAll();

    public void save(Student student);

    public void update(Student student);

    public void delete(Student student);

    public Student findById(int id);

    public Student findByEmail(String email);
}
