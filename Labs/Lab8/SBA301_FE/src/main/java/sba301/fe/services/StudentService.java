package sba301.fe.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sba301.fe.pojos.Student;
import sba301.fe.repositories.IStudentRepository;
import java.util.*;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private IStudentRepository iStudentRepo;

    @Override
    public void save(Student s) { iStudentRepo.save(s); }

    @Override
    public List<Student> findAll() { return iStudentRepo.findAll(); }

    @Override
    public void delete(Student s) { iStudentRepo.delete(s); }

    @Override
    public Student findByEmail(String email) {
        return iStudentRepo.findByEmail(email);
    }

    @Override
    public Student update(int id, Student s) {
        Optional<Student> st = iStudentRepo.findById(id);
        s.setId(id);
        return iStudentRepo.save(s);
    }

}
