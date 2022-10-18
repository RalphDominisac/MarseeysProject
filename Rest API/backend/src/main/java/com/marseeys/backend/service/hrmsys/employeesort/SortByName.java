package com.marseeys.backend.service.hrmsys.employeesort;

import com.marseeys.backend.entity.hrmsys.employee.Employee;

import java.util.Comparator;

public class SortByName implements Comparator<Employee> {
    public int compare(Employee a, Employee b) {
        return a.getFirstName().compareTo(b.getFirstName());
    }
}
