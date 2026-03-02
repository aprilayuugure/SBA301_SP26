package com.spring.a3ngoleminhquan_se18d04.configurations;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "staff")
@Getter
@Setter
public class StaffProperties {
    private String email;

    private String password;

    private String role;
}
