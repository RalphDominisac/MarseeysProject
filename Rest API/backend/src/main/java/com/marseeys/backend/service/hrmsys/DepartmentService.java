package com.marseeys.backend.service.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.hrmsys.department.DepartmentRequest;
import com.marseeys.backend.model.hrmsys.employee.StaffRequest;
import com.marseeys.backend.repository.hrmsys.DepartmentRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DepartmentService {
    private final DepartmentRepository departmentRepository;
    private final NextSequenceService nextSequenceService;
    private final DatabaseHelper databaseHelper;
    private final FindHelper findHelper;

    public List<Department> getDepartments() {
        return departmentRepository.viewDepartments();
    }

    public Department saveDepartment(DepartmentRequest departmentRequest) throws DatabaseException {
        Department department = new Department(
                nextSequenceService.getNextSequence("DepartmentSequence"),
                departmentRequest.getName()
        );

        try {
            return departmentRepository.save(department);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_DEPARTMENT_EXCEPTION
            );
        }
    }

    public Department setHead(int deptId, String empId) throws DatabaseException {
        Department department = findHelper.findDepartment(deptId);
        Employee employee = findHelper.findEmployee(empId);

        department.setHead(employee);

        return departmentRepository.save(department);
    }

    public Department setStaff(int deptId, StaffRequest staffRequest) throws DatabaseException {
        Department department = findHelper.findDepartment(deptId);
        List<Employee> staff = databaseHelper.checkEmployeesExist(staffRequest.getEmpIds());

        department.setStaff(staff);

        return departmentRepository.save(department);
    }

    public Department deleteDepartment(int id) throws DatabaseException {
        Department department = findHelper.findDepartment(id);

        department.setDeleted(!department.isDeleted());

        return departmentRepository.save(department);
    }
}
