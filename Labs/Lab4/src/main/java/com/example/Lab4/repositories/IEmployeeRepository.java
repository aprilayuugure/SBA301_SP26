package com.example.Lab4.repositories;

import com.example.Lab4.pojos.Employee;
import java.util.*;

public interface IEmployeeRepository  {
    public List<Employee> getAllEmployees();

    public Employee getEmployeeById(String empId);

    public Employee addEmployee(Employee e);

    public Employee updateEmployee(Employee e);

    public Employee deleteEmployeeById(String empId);
}
