package com.spring.a2ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "category_description")
    private String categoryDescription;

    @ManyToOne
    @JoinColumn(name = "parent_category_id")
    private Category parentCategory;

    @JsonIgnore
    @OneToMany(mappedBy = "parentCategory")
    private List<Category> childCategories;

    @OneToMany(mappedBy = "newsCategory")
    private List<NewsArticle> newsArticles;

    @Column(name = "is_active")
    private Boolean isActive;
}
