package com.spring.sba301_hibernate.pojo;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "Books")
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "isbn")
    private String isbn;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
    private Student student;

    public Book() {}

    public Book(String title, String author, String isbn, Student student) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.student = student;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id = " + id +
                ", title = '" + title + '\'' +
                ", author = '" + author + '\'' +
                ", isbn = '" + isbn + '\'' +
                '}';
    }
}
