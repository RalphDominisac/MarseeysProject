package com.marseeys.backend.entity.hrmsys.employee;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.types.CivilStatus;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@Document(collection = "Employees")
public class Employee {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String sex;
    private String contactNo;
    private String address;
    private String email;
    @DateTimeFormat
    private LocalDate birthday;
    private CivilStatus civilStatus;
    @DocumentReference(collection = "Shifts")
    private Shift shift;
    @DocumentReference(collection = "Departments")
    private Department department;
    @DocumentReference(collection = "Employees")
    private Employee backup;
    @CreatedDate
    private LocalDate created;
    private boolean active;

    public Employee(String firstName, String lastName, String sex, String contactNo, String address, String email, LocalDate birthday, CivilStatus civilStatus, Shift shift, Department department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.contactNo = contactNo;
        this.address = address;
        this.email = email;
        this.birthday = birthday;
        this.civilStatus = civilStatus;
        this.shift = shift;
        this.department = department;
        this.backup = null;
        this.created = LocalDate.now();
        this.active = true;
    }
}
