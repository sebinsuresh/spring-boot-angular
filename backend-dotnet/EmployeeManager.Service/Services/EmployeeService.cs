using EmployeeManager.Domain.Models;
using EmployeeManager.Repository.Repositories;
using EmployeeManager.Service.Mappers;

namespace EmployeeManager.Service.Services;

public class EmployeeService(IEmployeeRepository repo) : IEmployeeService
{
    private readonly IEmployeeRepository _repo = repo;

    public async Task<Employee> AddEmployee(Employee employee)
    {
        employee.EmployeeCode = Guid.NewGuid().ToString();
        return (await _repo.Add(employee.ToDb())).ToDomain();
    }

    public async Task<Employee> FindEmployeeById(long id)
    {
        return (await _repo.FindById(id)).ToDomain();
    }

    public async Task<IEnumerable<Employee>> FindAllEmployees()
    {
        return (await _repo.FindAll()).Select(x => x.ToDomain());
    }

    public async Task<Employee> UpdateEmployee(Employee employee)
    {
        return (await _repo.Update(employee.ToDb())).ToDomain();
    }

    public async Task DeleteEmployee(long id)
    {
        await _repo.Delete(id);
    }
}
