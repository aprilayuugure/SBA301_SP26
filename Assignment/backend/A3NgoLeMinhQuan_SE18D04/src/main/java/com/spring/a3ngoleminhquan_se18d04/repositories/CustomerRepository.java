package com.spring.a3ngoleminhquan_se18d04.repositories;

import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Optional<Customer> findByEmailAddress(String emailAddress);
}
