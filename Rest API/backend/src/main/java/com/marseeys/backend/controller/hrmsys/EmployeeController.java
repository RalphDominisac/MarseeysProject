package com.marseeys.backend.controller.hrmsys;

import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.hrmsys.employee.EmployeeRequest;
import com.marseeys.backend.service.hrmsys.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/employees")
@AllArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(employeeService.getEmployees());
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Employee> saveEmployee(@RequestBody @Valid EmployeeRequest employeeRequest) throws DatabaseException {
        return new ResponseEntity<>(employeeService.saveEmployee(employeeRequest), HttpStatus.CREATED);
    }

    @PostMapping("/{empId}/department/{deptId}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Employee> setEmployeeDepartment(@PathVariable String empId, @PathVariable int deptId) throws DatabaseException {
        return new ResponseEntity<>(employeeService.setEmployeeDepartment(empId, deptId), HttpStatus.OK);
    }

    @PostMapping("/{empId}/backup/{backupId}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Employee> setEmployeeBackup(@PathVariable String empId, @PathVariable String backupId) throws DatabaseException {
        return new ResponseEntity<>(employeeService.setBackupEmployee(empId, backupId), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable String id) throws DatabaseException {
        return new ResponseEntity<>(employeeService.deleteEmployee(id), HttpStatus.OK);
    }
}
