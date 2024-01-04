package dev.sebinsuresh.employeemanager.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.sebinsuresh.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    public Optional<Employee> findEmployeeById(Long id);
}
