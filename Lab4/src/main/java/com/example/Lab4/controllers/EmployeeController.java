package com.example.Lab4.controllers;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private IEmployeeService iEmployeeService;

    @GetMapping
    public Page<Employee> getEmployeesByPage(Pageable pageable) {
        return iEmployeeService.getAllEmployees(pageable);
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
