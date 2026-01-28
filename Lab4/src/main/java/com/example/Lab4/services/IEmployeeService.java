package com.example.Lab4.services;

import com.example.Lab4.pojos.Employee;
import org.springframework.data.domain.*;

public interface IEmployeeService {
    public Page<Employee> getAllEmployees(Pageable pageable);

    public Employee getEmployeeById(String empId);

    public Employee addEmployee(Employee e);

    public Employee updateEmployee(Employee e);

    public Employee deleteEmployee(String empId);
}
