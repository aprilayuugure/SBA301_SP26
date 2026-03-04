package com.spring.pe_sba301_sp25_be_ngoleminhquan.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "account_members")
public class AccountMember implements UserDetails {
    @Id
    @Column(name = "member_id")
    private String memberId;

    @Column(name = "member_password")
    private String memberPassword;

    @Column(name = "email_address")
    private String emailAddress;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "member_role")
    private Role memberRole;

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(memberRole.name()));
    }

    @JsonIgnore
    @Override
    public String getUsername() { return emailAddress; }

    @JsonIgnore
    @Override
    public String getPassword() { return memberPassword; }

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
}
