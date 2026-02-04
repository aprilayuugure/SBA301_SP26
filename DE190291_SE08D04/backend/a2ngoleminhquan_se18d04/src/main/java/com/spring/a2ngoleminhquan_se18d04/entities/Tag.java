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
@Table(name = "tags")
public class Tag implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Integer tagId;

    @Column(name = "tag_name")
    private String tagName;

    @Column(name = "note")
    private String note;

    @JsonIgnore
    @ManyToMany(mappedBy = "newsTags", fetch = FetchType.LAZY)
    private List<NewsArticle> newsArticles;
}
