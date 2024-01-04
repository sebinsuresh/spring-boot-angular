package dev.sebinsuresh.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.sebinsuresh.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
