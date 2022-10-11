package com.marseeys.backend.service.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.entity.hrmsys.employee.Shift;
import com.marseeys.backend.entity.security.user.User;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.hrmsys.employee.EmployeeRequest;
import com.marseeys.backend.repository.hrmsys.EmployeeRepository;
import com.marseeys.backend.repository.security.UserRepository;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final UserRepository userRepository;
    private final DatabaseHelper databaseHelper;
    private final FindHelper findHelper;
    private final PasswordEncoder passwordEncoder;

    public List<Employee> getEmployees() {
        return employeeRepository.viewEmployees();
    }

    public Employee saveEmployee(EmployeeRequest employeeRequest) throws DatabaseException {
        List<Shift> shift = databaseHelper.checkShiftsExist(employeeRequest.getShift());

        Employee employee = new Employee(
                employeeRequest.getFirstName(),
                employeeRequest.getLastName(),
                employeeRequest.getContactNo(),
                employeeRequest.getAddress(),
                employeeRequest.getEmail(),
                employeeRequest.getBirthday(),
                employeeRequest.getCivilStatus(),
                shift
        );

        String username = LocalDate.now().getYear() +
                LocalDate.now().getDayOfYear() +
                LocalDate.now().getMonthValue() +
                employeeRequest.getLastName() +
                employeeRequest.getFirstName();
        String password = LocalTime.now().getHour() +
                LocalTime.now().getSecond() +
                LocalTime.now().getMinute() +
                employeeRequest.getFirstName().substring(0, 2) +
                employeeRequest.getLastName().substring(0, 2);

        User user = new User(
                employeeRequest.getEmail(),
                username,
                passwordEncoder.encode(password)
        );

        userRepository.save(user);
        try {
            return employeeRepository.save(employee);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_EMPLOYEE_EXCEPTION
            );
        }
    }

    public Employee setEmployeeDepartment(String empId, int deptId) throws DatabaseException {
        Employee employee = findHelper.findEmployee(empId);
        Department department = findHelper.findDepartment(deptId);

        employee.setDepartment(department);

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
