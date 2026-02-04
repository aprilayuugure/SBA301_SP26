package com.spring.a2ngoleminhquan_se18d04.repositories;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface NewsArticleRepository extends JpaRepository<NewsArticle, Integer> {
    boolean existsByNewsCategory(Category c);

    boolean existsByCreatedBy(SystemAccount sa);

    List<NewsArticle> findAllByNewsTagsContaining(Tag t);
}
