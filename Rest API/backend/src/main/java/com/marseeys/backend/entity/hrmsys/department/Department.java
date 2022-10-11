package com.marseeys.backend.entity.hrmsys.department;

import com.marseeys.backend.entity.hrmsys.employee.Employee;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Getter
@Setter
@Document(collection = "Departments")
public class Department {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    @DocumentReference(collection = "Employees")
    private Employee head;
    @DocumentReference(collection = "Employees")
    private List<Employee> staff;
    private boolean deleted;

    public Department(int id, String name) {
        this.id = id;
        this.name = name;
        this.head = null;
        this.staff = null;
        this.deleted = false;
    }
}
