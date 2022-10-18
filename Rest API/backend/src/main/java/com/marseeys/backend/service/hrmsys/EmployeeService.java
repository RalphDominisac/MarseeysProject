package com.marseeys.backend.service.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.entity.hrmsys.employee.Shift;
import com.marseeys.backend.entity.security.user.User;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.hrmsys.employee.EmployeeRequest;
import com.marseeys.backend.repository.hrmsys.DepartmentRepository;
import com.marseeys.backend.repository.hrmsys.EmployeeRepository;
import com.marseeys.backend.repository.security.UserRepository;
import com.marseeys.backend.service.hrmsys.employeesort.SortByDepartment;
import com.marseeys.backend.service.hrmsys.employeesort.SortByName;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final UserRepository userRepository;
    private final DatabaseHelper databaseHelper;
    private final FindHelper findHelper;
    private final PasswordEncoder passwordEncoder;

    public List<Employee> getEmployees() {
        return employeeRepository.viewEmployees();
    }

    public List<Employee> getEmployeesByName() {
        List<Employee> employees = employeeRepository.viewEmployees();

        employees.sort(new SortByName());

        return employees;
    }

    public List<Employee> getEmployeesByDepartment() {
        List<Employee> employees = employeeRepository.viewEmployees();

        employees.sort(new SortByDepartment());

        return employees;
    }

    public Employee saveEmployee(EmployeeRequest employeeRequest) throws DatabaseException {
        Shift shift = findHelper.findShift(employeeRequest.getShift());
        Department department = findHelper.findDepartment(employeeRequest.getDepartment());

        Employee employee = new Employee(
                employeeRequest.getFirstName(),
                employeeRequest.getLastName(),
                employeeRequest.getSex(),
                employeeRequest.getContactNo(),
                employeeRequest.getAddress(),
                employeeRequest.getEmail(),
                employeeRequest.getBirthday(),
                employeeRequest.getCivilStatus(),
                shift,
                department
        );

        String username = LocalDate.now().getYear() +
                LocalDate.now().getDayOfYear() +
                LocalDate.now().getMonthValue() +
                employeeRequest.getLastName() +
                employeeRequest.getFirstName();
        String password = employeeRequest.getBirthday().getMonthValue() +
                employeeRequest.getBirthday().getDayOfYear() +
                employeeRequest.getBirthday().getYear() +
                employeeRequest.getFirstName().substring(0, 2).toLowerCase() +
                employeeRequest.getLastName().substring(0, 2).toLowerCase();

        User user = new User(
                employeeRequest.getEmail(),
                username,
                passwordEncoder.encode(password)
        );

        try {
            userRepository.save(user);
            String empId = employeeRepository.save(employee).getId();
            databaseHelper.updateDepartmentStaff(department.getId(), empId);
            return employeeRepository.save(employee);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_EMPLOYEE_EXCEPTION
            );
        }
    }

    public Employee editEmployee(String empId, EmployeeRequest employeeRequest) throws DatabaseException {
        Employee employee = findHelper.findEmployee(empId);
        Shift shift = findHelper.findShift(employeeRequest.getShift());
        Department department = findHelper.findDepartment(employeeRequest.getDepartment());

        employee.setFirstName(employeeRequest.getFirstName());
        employee.setLastName(employeeRequest.getLastName());
        employee.setSex(employeeRequest.getSex());
        employee.setContactNo(employeeRequest.getContactNo());
        employee.setAddress(employeeRequest.getAddress());
        employee.setEmail(employeeRequest.getEmail());
        employee.setBirthday(employeeRequest.getBirthday());
        employee.setCivilStatus(employeeRequest.getCivilStatus());
        employee.setShift(shift);
        employee.setDepartment(department);

        return employeeRepository.save(employee);
    }

    public Employee setEmployeeDepartment(String empId, int deptId) throws DatabaseException {
        Employee employee = findHelper.findEmployee(empId);
        Department department = findHelper.findDepartment(deptId);

        databaseHelper.updateDepartmentStaff(deptId, empId);

        departmentRepository.save(department);
        return employeeRepository.save(employee);
    }

    public Employee setBackupEmployee(String empOne, String empTwo) throws DatabaseException {
        Employee employee = findHelper.findEmployee(empOne);
        Employee backup = findHelper.findEmployee(empTwo);

        employee.setBackup(backup);

        return employeeRepository.save(employee);
    }

    public Employee deleteEmployee(String id) throws DatabaseException {
        Employee employee = findHelper.findEmployee(id);

        employee.setActive(!employee.isActive());

        return employeeRepository.save(employee);
    }
}
