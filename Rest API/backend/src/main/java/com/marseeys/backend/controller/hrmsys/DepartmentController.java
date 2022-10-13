package com.marseeys.backend.controller.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.hrmsys.department.DepartmentRequest;
import com.marseeys.backend.model.hrmsys.employee.StaffRequest;
import com.marseeys.backend.service.hrmsys.DepartmentService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the departments.",
            notes = "",
            response = Department.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Department>> getDepartments() {
        return ResponseEntity.ok(departmentService.getDepartments());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds a department based on the given object.",
            notes = "Adding departments will only take in name as the parameter.",
            response = Department.class
    )
    public ResponseEntity<Department> addDepartment(@RequestBody @Valid DepartmentRequest departmentRequest) throws DatabaseException {
        return new ResponseEntity<>(departmentService.saveDepartment(departmentRequest), HttpStatus.CREATED);
    }

    @PostMapping("/{deptId}/{empId}")
//    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(
            value = "Sets the specified employee as the head of the specified department.",
            notes = "",
            response = Department.class
    )
    public ResponseEntity<Department> setDepartmentHead(@PathVariable int deptId, @PathVariable String empId) throws DatabaseException {
        return new ResponseEntity<>(departmentService.setHead(deptId, empId), HttpStatus.OK);
    }

    @PostMapping("/{deptId}/staff/add")
//    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(
            value = "Sets the specified employee ids as the staff of the specified department.",
            notes = "Adding staff will only take in a list of employee ids.",
            response = Department.class
    )
    public ResponseEntity<Department> setDepartmentStaff(@PathVariable int deptId, @RequestBody @Valid StaffRequest staffRequest) throws DatabaseException {
        return new ResponseEntity<>(departmentService.setStaff(deptId, staffRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{deptId}")
//    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(
            value = "Marks the specified department as deleted.",
            notes = "",
            response = Department.class
    )
    public ResponseEntity<Department> deleteDepartment(@PathVariable int deptId) throws DatabaseException {
        return new ResponseEntity<>(departmentService.deleteDepartment(deptId), HttpStatus.OK);
    }
}
