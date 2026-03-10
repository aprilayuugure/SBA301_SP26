package sba301.fe.services;

import sba301.fe.pojos.Student;
import java.util.List;

public interface IStudentService {
    public List<Student> findAll();

    public void save(Student s);

    public void delete(Student s);

    public Student findByEmail(String email);

    public Student update(int id, Student s);
}
