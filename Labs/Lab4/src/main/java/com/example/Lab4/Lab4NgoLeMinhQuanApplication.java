package com.example.Lab4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.example.Lab4.controllers", "com.example.Lab4.repositories", "com.example.Lab4.services"})
public class Lab4NgoLeMinhQuanApplication {

	public static void main(String[] args) {
		SpringApplication.run(Lab4NgoLeMinhQuanApplication.class, args);
	}

}
