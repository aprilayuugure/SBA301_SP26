package com.spring.a2ngoleminhquan_se18d04;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.spring.a2ngoleminhquan_se18d04.controllers",
                "com.spring.a2ngoleminhquan_se18d04.services",
                "com.spring.a2ngoleminhquan_se18d04.repositories"})
@EnableJpaRepositories(basePackages = "com.spring.a2ngoleminhquan_se18d04.repositories")
@EntityScan(basePackages = "com.spring.a2ngoleminhquan_se18d04.entities")
public class AssignmentApplication {

    public static void main(String[] args) {
        SpringApplication.run(AssignmentApplication.class, args);
    }

}
