package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.SystemAccount;

import java.util.*;

public interface ISystemAccountService {
    public List<SystemAccount> getAllAccounts();

    public SystemAccount getAccountById(Integer accountId);

    public SystemAccount addAccount(SystemAccount sa);

    public SystemAccount updateAccount(Integer accountId, SystemAccount sa);

    public String deleteAccount(Integer accountId);
}
