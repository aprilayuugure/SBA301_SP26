package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SystemAccountService implements ISystemAccountService {
    @Autowired
    private SystemAccountRepository accountRepo;

    @Autowired
    private NewsArticleRepository newsArticleRepo;

    @Override
    public List<SystemAccount> getAllAccounts() { return accountRepo.findAll(); }

    @Override
    public SystemAccount getAccountById(Integer accountId) {
        return accountRepo.findById(accountId).orElse(null);
    }

    @Override
    public SystemAccount addAccount(SystemAccount sa) { return accountRepo.save(sa); }

    @Override
    public SystemAccount updateAccount(Integer accountId, SystemAccount sa) {
        SystemAccount a = getAccountById(accountId);

        if (a != null)
        {
            a.setAccountName(sa.getAccountName());
            a.setAccountEmail(sa.getAccountEmail());
            a.setAccountPassword(sa.getAccountPassword());

            return accountRepo.save(a);
        }

        return null;
    }

    @Override
    public String deleteAccount(Integer accountId) {
        SystemAccount a = getAccountById(accountId);

        if (a != null)
        {
            if (!newsArticleRepo.existsByCreatedBy(a)) accountRepo.delete(a);

            return "Deletion succeeded";
        }

        return "Deletion failed";
    }
}
