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
@Table(name = "news_articles")
public class NewsArticle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_article_id")
    private Integer newsArticleId;

    @Column(name = "news_title")
    private String newsTitle;

    @Column(name = "headline")
    private String headline;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "news_content")
    private String newsContent;

    @Column(name = "news_source")
    private String newsSource;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "news_category")
    private Category newsCategory;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable (
            name = "news_tag",
            joinColumns = @JoinColumn(name = "news_article_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> newsTags;

    @Column(name = "news_status")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "created_by_id")
    private SystemAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by_id")
    private SystemAccount updatedBy;

    @Column(name = "modified_date")
    private Date modifedDate;
}
