package com.example.Lab4.controllers;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.services.IEmployeeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springdoc.core.converters.models.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@Tag(name = "Employee operations", description = "CRUD with employees")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private IEmployeeService iEmployeeService;

    @Operation (
            summary = "Get employee by ID",
            operationId = "getEmployeeById",
            tags = {"employees"},
            responses = {
                    @ApiResponse(responseCode = "200", description = "Employee found!",
                                 content = @Content(schema = @Schema(implementation = Employee.class))),

                    @ApiResponse(responseCode = "404", description = "Employee not found!")
            }
    )

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
