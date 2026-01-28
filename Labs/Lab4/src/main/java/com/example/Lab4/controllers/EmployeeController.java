package com.example.Lab4.controllers;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.services.IEmployeeService;
import org.springdoc.core.converters.models.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private IEmployeeService iEmployeeService;

    @GetMapping
    public List<Employee> getEmployeesByPage() {
        return iEmployeeService.getAllEmployees();
    }

    @GetMapping("/{empId}")
    public Employee getEmployeeById(@PathVariable String empId) {
        return iEmployeeService.getEmployeeById(empId);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee e) {
        return iEmployeeService.addEmployee(e);
    }

    @PutMapping
    public Employee updateEmployee(@RequestBody Employee e) {
        return iEmployeeService.updateEmployee(e);
    }

    @DeleteMapping("/{empId}")
    public Employee deleteEmployee(@PathVariable String empId) {
        return iEmployeeService.deleteEmployee(empId);
    }
}
