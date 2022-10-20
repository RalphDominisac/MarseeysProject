package com.marseeys.backend.helper;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.security.role.Role;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.repository.hrmsys.DepartmentRepository;
import com.marseeys.backend.repository.security.RoleRepository;
import com.marseeys.backend.types.RoleEnum;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@AllArgsConstructor
public class DatabaseHelper {
    private final FindHelper findHelper;
    private final RoleRepository roleRepository;
    private final DepartmentRepository departmentRepository;

    public Map<String, Double> checkIngredientsExist(Map<String, Double> ingredientIds) throws DatabaseException {
        Map<String, Double> ingredientContents = new HashMap<>();

        for (Map.Entry<String, Double> entry : ingredientIds.entrySet()) {
            Ingredient ingredient = findHelper.findIngredient(Integer.parseInt(entry.getKey()));
            ingredientContents.put(String.valueOf(ingredient.getId()), entry.getValue());
        }

        return ingredientContents;
    }

    public Map<String, Integer> checkMenusExist(Map<String, Integer> menuIds) throws DatabaseException {
        Map<String, Integer> contents = new HashMap<>();

        for (Map.Entry<String, Integer> entry : menuIds.entrySet()) {
            Menu menu = findHelper.findMenu(entry.getKey());
            contents.put(String.valueOf(menu.getName()), entry.getValue());
        }

        return contents;
    }

    public List<Employee> checkEmployeesExist(List<String> empIds) throws DatabaseException {
        List<Employee> employees = new ArrayList<>();

        for (String empId : empIds) {
            employees.add(findHelper.findEmployee(empId));
        }

        return employees;
    }

    public Department updateDepartmentStaff(int deptId, String empId) throws DatabaseException {
        Department department = findHelper.findDepartment(deptId);
        List<Employee> staff = department.getStaff();

        staff.add(findHelper.findEmployee(empId));
        department.setStaff(staff);

        return departmentRepository.save(department);
    }

    public Set<Role> getRoles(Set<String> roles) {
        Set<Role> userRoles = new HashSet<>();

        if (roles.isEmpty()) {
            Role role = roleRepository.findByRole(RoleEnum.ROLE_USER).orElseThrow(
                    () -> new RuntimeException("Error: Role is not found.")
            );

            userRoles.add(role);
        } else {
            roles.forEach(role -> {
                switch (role) {
                    case "admin" -> {
                        Role adminRole = roleRepository.findByRole(RoleEnum.ROLE_ADMIN).orElseThrow(
                                () -> new RuntimeException("Error: Role is not found.")
                        );
                        userRoles.add(adminRole);
                    }
                    case "mod" -> {
                        Role modRole = roleRepository.findByRole(RoleEnum.ROLE_MODERATOR).orElseThrow(
                                () -> new RuntimeException("Error: Role is not found.")
                        );
                        userRoles.add(modRole);
                    }
                    default -> {
                        Role userRole = roleRepository.findByRole(RoleEnum.ROLE_USER).orElseThrow(
                                () -> new RuntimeException("Error: Role is not found.")
                        );
                        userRoles.add(userRole);
                    }
                }
            });
        }

        return userRoles;
    }
}
