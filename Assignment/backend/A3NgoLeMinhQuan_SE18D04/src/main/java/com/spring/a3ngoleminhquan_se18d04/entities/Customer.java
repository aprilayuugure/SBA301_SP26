package com.spring.a3ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.a3ngoleminhquan_se18d04.enums.CustomerStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customers")
public class Customer implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "customer_full_name", unique = true)
    private String customerFullName;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "email_address")
    private String emailAddress;

    @Column(name = "customer_birthday")
    private LocalDate customerBirthday;

    @Enumerated(EnumType.STRING)
    @Column(name = "customer_status")
    private CustomerStatus customerStatus;

    @Column(name = "password")
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    private List<BookingReservation> bookingReservations;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @JsonIgnore
    @Override
    public String getUsername() { return emailAddress; }

    @JsonIgnore
    @Override
    public String getPassword() { return password; }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() { return true; }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() { return true; }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @JsonIgnore
    @Override
    public boolean isEnabled() { return true; }

    @Override
    public String toString() {
        return "Customer ID: " + customerId + '\n'
                + "Customer full name: " + customerFullName + '\n'
                + "Telephone: " + telephone + '\n'
                + "Email address: " + emailAddress + '\n'
                + "Customer birthday: " + customerBirthday + '\n'
                + "Customer status: " + customerStatus.toString() + '\n'
                + "Password: " + password + '\n';
    }
}
