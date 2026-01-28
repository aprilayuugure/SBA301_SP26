package com.example.Lab4.repositories;

import com.example.Lab4.pojos.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;
import java.util.*;

public interface IEmployeeRepository extends PagingAndSortingRepository<Employee, String> {
    public List<Employee> getAllEmployees();

    public Employee getEmployeeById(String empId);

    public Employee addEmployee(Employee e);

    public Employee updateEmployee(Employee e);

    public Employee deleteEmployeeById(String empId);
}
