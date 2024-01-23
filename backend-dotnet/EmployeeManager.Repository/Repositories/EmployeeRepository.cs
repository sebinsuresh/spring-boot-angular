using EmployeeManager.Repository.Models;

namespace EmployeeManager.Repository.Repositories;

public class EmployeeRepository : IEmployeeRepository
{
    public Task<Employee> Add(Employee employee)
    {
        throw new NotImplementedException();
    }

    public Task<Employee> FindById(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Employee>> FindAll()
    {
        throw new NotImplementedException();
    }

    public Task<Employee> Update(Employee employee)
    {
        throw new NotImplementedException();
    }

    public Task Delete(long id)
    {
        throw new NotImplementedException();
    }
}
