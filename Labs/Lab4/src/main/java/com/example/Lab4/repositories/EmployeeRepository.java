package com.example.Lab4.repositories;

import com.example.Lab4.pojos.Employee;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class EmployeeRepository implements IEmployeeRepository{
    private List<Employee> employees = createList();

    private static List<Employee> createList() {
        List<Employee> tempEmployees = new ArrayList<>();
        Collections.addAll(tempEmployees,
                new Employee("EMP01", "Steven Paris", "Technical Manager", 800000),
                new Employee("EMP02", "John Lemon", "Developer", 600000),
                new Employee("EMP03", "Micheal Davis", "Tester", 600000),
                new Employee("EMP04", "David William", "Accountant", 400000),
                new Employee("EMP05", "Christopher Robert", "HR Manager", 1200000),
                new Employee("EMP06", "George Ronald", "Developer", 600000)
        );

        return tempEmployees;
    }

    public List<Employee> getAllEmployees() {
        return employees;
    }

    public Employee getEmployeeById(String empId) {
        Employee tempEmployee = null;

        for (Employee emp : employees) {
            if (emp.getEmpId().equals(empId)) {
                tempEmployee = emp; break;
            }
        }

        return tempEmployee;
    }

    public Employee addEmployee(Employee e) {
        employees.add(e);

        return e;
    }

    public Employee updateEmployee(Employee e) {
        int index = 0;

        for (int i = 0; i < employees.size(); ++i)
            if (employees.get(i).getEmpId().equals(e.getEmpId()))
            {
                index = i; break;
            }

        Employee emp = new Employee();
        emp.setEmpId(e.getEmpId());
        emp.setName(e.getName());
        emp.setDesignation(e.getDesignation());
        emp.setSalary(e.getSalary());
        employees.set(index, emp);

        return emp;
    }

    public Employee deleteEmployeeById(String empId)
    {
        employees.removeIf(e -> e.getEmpId().equals(empId));
        return null;
    }
}
