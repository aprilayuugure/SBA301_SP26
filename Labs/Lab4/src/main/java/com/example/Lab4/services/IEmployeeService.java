package com.example.Lab4.services;

import com.example.Lab4.pojos.Employee;
import java.util.*;

public interface IEmployeeService {
    public List<Employee> getAllEmployees();

    public Employee getEmployeeById(String empId);

    public Employee addEmployee(Employee e);

    public Employee updateEmployee(Employee e);

    public Employee deleteEmployee(String empId);
}
