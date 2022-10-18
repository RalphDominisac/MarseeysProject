package com.marseeys.backend.service.hrmsys.employeesort;

import com.marseeys.backend.entity.hrmsys.employee.Employee;

import java.util.Comparator;

public class SortByDepartment implements Comparator<Employee> {
    public int compare(Employee a, Employee b) {
        return a.getDepartment().getName().compareTo(b.getDepartment().getName());
    }
}
