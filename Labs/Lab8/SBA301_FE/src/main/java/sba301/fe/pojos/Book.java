package sba301.fe.pojos;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "books")
public class Book {
    @Id
    private int id;

    private String title;

    private String author;

    private String isbn;

    private Set<Student> students = new HashSet<>();
}
