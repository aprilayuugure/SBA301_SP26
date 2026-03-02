package com.spring.a3ngoleminhquan_se18d04.repositories;

import com.spring.a3ngoleminhquan_se18d04.entities.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomTypeRepository extends JpaRepository<RoomType, Integer> {
}
