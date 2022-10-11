package com.marseeys.backend.controller.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.hrmsys.department.DepartmentRequest;
import com.marseeys.backend.model.hrmsys.employee.StaffRequest;
import com.marseeys.backend.service.hrmsys.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/departments")
@AllArgsConstructor
public class DepartmentController {
    private final DepartmentService departmentService;

    @GetMapping()
    public ResponseEntity<List<Department>> getDepartments() {
        return ResponseEntity.ok(departmentService.getDepartments());
    }

    @PostMapping("/add")
    public ResponseEntity<Department> addDepartment(@RequestBody @Valid DepartmentRequest departmentRequest) throws DatabaseException {
        return new ResponseEntity<>(departmentService.saveDepartment(departmentRequest), HttpStatus.CREATED);
    }

    @PostMapping("/{deptId}/{empId}")
    public ResponseEntity<Department> setDepartmentHead(@PathVariable int deptId, @PathVariable String empId) throws DatabaseException {
        return new ResponseEntity<>(departmentService.setHead(deptId, empId), HttpStatus.OK);
    }

    @PostMapping("/{deptId}/staff/add")
    public ResponseEntity<Department> setDepartmentStaff(@PathVariable int deptId, @RequestBody @Valid StaffRequest staffRequest) throws DatabaseException {
        return new ResponseEntity<>(departmentService.setStaff(deptId, staffRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{deptId}")
    public ResponseEntity<Department> deleteDepartment(@PathVariable int deptId) throws DatabaseException {
        return new ResponseEntity<>(departmentService.deleteDepartment(deptId), HttpStatus.OK);
    }
}
