using EmployeeManager.Domain.Models;
using EmployeeManager.Repository.Repositories;

namespace EmployeeManager.Service.Services;

public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _repo;

    public EmployeeService(IEmployeeRepository repo)
    {
        _repo = repo;
    }

    public Task<Employee> AddEmployee(Employee employee)
    {
        throw new NotImplementedException();
    }

    public Task<Employee> FindEmployeeById(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Employee>> FindAllEmployees()
    {
        throw new NotImplementedException();
    }

    public Task<Employee> UpdateEmployee(Employee employee)
    {
        throw new NotImplementedException();
    }

    public Task DeleteEmployee(long id)
    {
        throw new NotImplementedException();
    }
}
