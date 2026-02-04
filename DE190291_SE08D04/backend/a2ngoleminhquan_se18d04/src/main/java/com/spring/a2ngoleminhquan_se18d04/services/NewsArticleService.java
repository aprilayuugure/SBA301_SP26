package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class NewsArticleService implements INewsArticleService {
    @Autowired
    private NewsArticleRepository newsArticleRepo;

    @Override
    public List<NewsArticle> getAllNewsArticles() {
        return newsArticleRepo.findAll();
    }

    @Override
    public NewsArticle getNewsArticleById(Integer newsArticleId) {
        return newsArticleRepo.findById(newsArticleId).orElse(null);
    }

    @Override
    public NewsArticle addNewsArticle(NewsArticle na) { return newsArticleRepo.save(na); }

    @Override
    public NewsArticle updateNewsArticle(Integer newsArticleId, NewsArticle na) {
        NewsArticle n = getNewsArticleById(newsArticleId);

        if (n != null) {
            n.setNewsTitle(na.getNewsTitle());
            n.setHeadline(na.getHeadline());
            n.setNewsContent(na.getNewsContent());
            n.setNewsSource(na.getNewsSource());
            n.setNewsCategory(na.getNewsCategory());
            n.setStatus(na.getStatus());
            n.getNewsTags().clear();
            n.getNewsTags().addAll(na.getNewsTags());
            n.setUpdatedBy(na.getUpdatedBy());
            n.setModifedDate(new Date());

            return newsArticleRepo.save(n);
        }

        return null;
    }

    @Transactional
    @Override
    public String deleteNewsArticle(Integer newsArticleId) {
        NewsArticle na = getNewsArticleById(newsArticleId);

        if (na != null)
        {
            newsArticleRepo.delete(na);

            return "Deletion succeeded";
        }

        return "Deletion failed";
    }
}
