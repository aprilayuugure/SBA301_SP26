package sba301.fe.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import sba301.fe.pojos.Student;

public interface IStudentRepository extends MongoRepository<Student, Integer> {
    public Student findByEmail(String email);
}
