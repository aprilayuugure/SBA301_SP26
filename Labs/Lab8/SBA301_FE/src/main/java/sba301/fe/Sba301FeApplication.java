package sba301.fe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan({"sba301.fe.controllers", "sba301.fe.services"})
@EnableMongoRepositories(basePackages = "sba301.fe.repositories")
@EntityScan(basePackages = "sba301.fe.pojos")
public class Sba301FeApplication {

    public static void main(String[] args) {
        SpringApplication.run(Sba301FeApplication.class, args);
    }

}
