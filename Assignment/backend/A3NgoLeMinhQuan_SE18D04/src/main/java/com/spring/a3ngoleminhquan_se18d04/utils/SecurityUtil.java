package com.spring.a3ngoleminhquan_se18d04.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtil {
    public static Integer getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated()) throw new RuntimeException("User not authenticated");

        return (Integer) auth.getPrincipal();
    }
}
