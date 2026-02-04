package com.spring.a2ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "system_accounts")
public class SystemAccount implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Integer accountId;

    @Column(name = "account_name")
    private String accountName;

    @Column(name = "account_email")
    private String accountEmail;

    @Column(name = "account_role")
    private int accountRole;

    @Column(name = "account_password")
    private String accountPassword;

    @JsonIgnore
    @OneToMany(mappedBy = "createdBy")
    private List<NewsArticle> articlesCreated;

    @JsonIgnore
    @OneToMany(mappedBy = "updatedBy")
    private List<NewsArticle> articlesUpdated;
}
