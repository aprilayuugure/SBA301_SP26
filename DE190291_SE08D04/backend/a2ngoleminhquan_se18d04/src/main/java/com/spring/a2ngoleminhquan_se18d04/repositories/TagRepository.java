package com.spring.a2ngoleminhquan_se18d04.repositories;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
}
