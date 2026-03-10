package sba301.fe.pojos;

import java.util.*;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "students")
public class Student {
    @Id
    private int id;

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private int marks;

    private List<Book> books;

    public Student(int id, String email, String password, String firstName, String lastName, int marks) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks;
    }
}
