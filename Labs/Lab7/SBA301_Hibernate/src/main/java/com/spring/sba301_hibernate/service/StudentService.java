package com.spring.sba301_hibernate.service;

import com.spring.sba301_hibernate.pojo.Student;
import com.spring.sba301_hibernate.repository.IStudentRepository;
import com.spring.sba301_hibernate.repository.StudentRepository;
import java.util.List;

public class StudentService implements IStudentService {
    private IStudentRepository iStudentRepo = null;

    public StudentService() { iStudentRepo = new StudentRepository(); }

    @Override
    public void save(Student student) { iStudentRepo.save(student); }

    @Override
    public List<Student> getAll() { return iStudentRepo.getAll(); }

    @Override
    public void update(Student student) { iStudentRepo.update(student); }

    @Override
    public void delete(Student student) { iStudentRepo.delete(student); }

    @Override
    public Student findById(int id) { return iStudentRepo.findById(id); }

    @Override
    public Student findByEmail(String email) { return iStudentRepo.findByEmail(email); }
}
