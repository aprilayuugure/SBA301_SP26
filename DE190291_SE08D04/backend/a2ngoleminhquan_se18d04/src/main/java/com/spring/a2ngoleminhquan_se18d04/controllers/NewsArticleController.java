package com.spring.a2ngoleminhquan_se18d04.controllers;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/news")
public class NewsArticleController {
    @Autowired
    private INewsArticleService iNewsService;

    @GetMapping
    public ResponseEntity<List<NewsArticle>> getAllNewsArticles() {
        return ResponseEntity.ok(iNewsService.getAllNewsArticles());
    }

    @GetMapping("/{newsArticleId}")
    public ResponseEntity<NewsArticle> getNewsById(@PathVariable Integer newsArticleId) {
        return ResponseEntity.ok(iNewsService.getNewsArticleById(newsArticleId));
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public NewsArticle saveNews(@RequestBody NewsArticle na) {
        return iNewsService.addNewsArticle(na);
    }

    @PutMapping("/{newsArticleId}/update")
    public ResponseEntity<NewsArticle> updateNews(@PathVariable Integer newsArticleId, @RequestBody NewsArticle na) {
        return ResponseEntity.ok(iNewsService.updateNewsArticle(newsArticleId, na));
    }

    @DeleteMapping("/{tagId}/delete")
    public ResponseEntity<String> deleteAccount(@PathVariable Integer newsArticleId) {
        return ResponseEntity.ok(iNewsService.deleteNewsArticle(newsArticleId));
    }
}
