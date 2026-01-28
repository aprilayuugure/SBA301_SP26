package com.example.Lab4.services;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class EmployeeService implements IEmployeeService{
    @Autowired
    private EmployeeRepository iEmployeeRepo;

    public List<Employee> getAllEmployees() { return iEmployeeRepo.getAllEmployees(); }

    public Employee getEmployeeById(String empId) { return iEmployeeRepo.getEmployeeById(empId); }

    public Employee addEmployee(Employee e) { return iEmployeeRepo.addEmployee(e); }

    public Employee updateEmployee(Employee e) { return iEmployeeRepo.updateEmployee(e); }

    public Employee deleteEmployee(String empId) { return iEmployeeRepo.deleteEmployeeById(empId); }
}
