package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class TagService implements ITagService {
    @Autowired
    private TagRepository tagRepo;

    @Autowired
    private NewsArticleRepository newsArticleRepo;

    @Override
    public List<Tag> getAllTags() { return tagRepo.findAll(); }

    @Override
    public Tag getTagById(Integer tagId) {
        return tagRepo.findById(tagId).orElseThrow(null);
    }

    @Override
    public Tag addTag(Tag t) {  return tagRepo.save(t); }

    @Override
    public Tag updateTag(Integer tagId, Tag t) {
        Tag tag = getTagById(tagId);

        if (tag != null)
        {
            tag.setTagName(t.getTagName());
            tag.setNote(t.getNote());

            return tagRepo.save(tag);
        }

        return null;
    }

    @Transactional
    @Override
    public String deleteTag(Integer tagId) {
        Tag tag = getTagById(tagId);

        if (tag != null) {
            for (NewsArticle na : newsArticleRepo.findAllByNewsTagsContaining(tag))
                na.getNewsTags().remove(tag);

            tagRepo.delete(tag);

            return "Deletion succeeded";
        }

        return "Deletion failed";
    }
}
