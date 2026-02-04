package com.spring.a2ngoleminhquan_se18d04.controllers;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/tags")
public class TagController {
    @Autowired
    private ITagService iTagService;

    @GetMapping
    public ResponseEntity<List<Tag>> getAllTags() {
        return ResponseEntity.ok(iTagService.getAllTags());
    }

    @GetMapping("/{tagId}")
    public ResponseEntity<Tag> getTagById(@PathVariable Integer tagId) {
        return ResponseEntity.ok(iTagService.getTagById(tagId));
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Tag saveTag(@RequestBody Tag t) {
        return iTagService.addTag(t);
    }

    @PutMapping("/{tagId}/update")
    public ResponseEntity<Tag> updateTag(@PathVariable Integer tagId, @RequestBody Tag t) {
        return ResponseEntity.ok(iTagService.updateTag(tagId, t));
    }

    @DeleteMapping("/{tagId}/delete")
    public ResponseEntity<String> deleteAccount(@PathVariable Integer tagId) {
        return ResponseEntity.ok(iTagService.deleteTag(tagId));
    }
}
