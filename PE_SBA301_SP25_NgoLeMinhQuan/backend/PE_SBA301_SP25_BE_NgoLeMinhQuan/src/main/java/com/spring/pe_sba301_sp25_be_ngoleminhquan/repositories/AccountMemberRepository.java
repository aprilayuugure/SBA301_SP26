package com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.AccountMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountMemberRepository extends JpaRepository<AccountMember, String> {
    Optional<AccountMember> findByEmailAddress(String emailAddress);

    Optional<AccountMember> findTopByOrderByMemberIdDesc();
}
