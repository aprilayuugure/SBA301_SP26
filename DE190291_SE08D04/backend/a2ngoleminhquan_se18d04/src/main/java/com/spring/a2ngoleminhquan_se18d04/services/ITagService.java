package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.Tag;

import java.util.List;

public interface ITagService {
    public List<Tag> getAllTags();

    public Tag getTagById(Integer tagId);

    public Tag addTag(Tag t);

    public Tag updateTag(Integer tagId, Tag t);

    public String deleteTag(Integer tagId);
}
