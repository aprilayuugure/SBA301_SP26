package com.spring.sba301_hibernate.repository;

import com.spring.sba301_hibernate.dao.StudentDAO;
import com.spring.sba301_hibernate.pojo.Student;
import java.util.*;

public class StudentRepository implements IStudentRepository {
    private StudentDAO studentDAO;

    public StudentRepository() { studentDAO = new StudentDAO(); }

    @Override
    public void save(Student student) {
        studentDAO.save(student);
    }

    @Override
    public void update(Student student) {
        studentDAO.updateStudent(student);
    }

    @Override
    public void delete(Student student) {
        studentDAO.deleteStudent(student);
    }

    @Override
    public Student findById(int id) {
        return studentDAO.getStudentById(id);
    }

    @Override
    public Student findByEmail(String email) {
        return studentDAO.findStudentByEmail(email);
    }

    @Override
    public List<Student> getAll() {
        return studentDAO.getAllStudents();
    }
}
