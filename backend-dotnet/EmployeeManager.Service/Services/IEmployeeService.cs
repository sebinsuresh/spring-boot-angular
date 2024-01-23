using EmployeeManager.Domain.Models;

namespace EmployeeManager.Service.Services;

public interface IEmployeeService
{
    public Task<Employee> AddEmployee(Employee employee);
    public Task<Employee> FindEmployeeById(long id);
    public Task<IEnumerable<Employee>> FindAllEmployees();
    public Task<Employee> UpdateEmployee(Employee employee);
    public Task DeleteEmployee(long id);
}
