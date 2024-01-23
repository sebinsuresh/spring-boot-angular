using EmployeeManager.Repository.Models;

namespace EmployeeManager.Repository.Repositories;

public interface IEmployeeRepository
{
    public Task<Employee> Add(Employee employee);
    public Task<Employee> FindById(long id);
    public Task<IEnumerable<Employee>> FindAll();
    public Task<Employee> Update(Employee employee);
    public Task Delete(long id);
}
