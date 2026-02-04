package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.NewsArticle;

import java.util.*;

public interface INewsArticleService {
    public List<NewsArticle> getAllNewsArticles();

    public NewsArticle getNewsArticleById(Integer newsArticleId);

    public NewsArticle addNewsArticle(NewsArticle na);

    public NewsArticle updateNewsArticle(Integer newsArticleId, NewsArticle na);

    public String deleteNewsArticle(Integer newsArticleId);
}
