using EmployeeManager.Core.Exceptions;
using EmployeeManager.Repository.Models;

namespace EmployeeManager.Repository.Repositories;

public class EmployeeRepository : IEmployeeRepository
{
    public async Task<Employee> Add(Employee employee)
    {
        throw new NotImplementedException();
    }

    public async Task<Employee> FindById(long id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<Employee>> FindAll()
    {
        throw new NotImplementedException();
    }

    public async Task<Employee> Update(Employee employee)
    {
        throw new NotImplementedException();
    }

    public async Task Delete(long id)
    {
        throw new NotImplementedException();
    }
}

public class MockEmployeeRepository : IEmployeeRepository
{
    private static readonly IList<Employee> db = new List<Employee>();

    public async Task<Employee> Add(Employee employee)
    {
        employee.Id = Random.Shared.NextInt64();
        db.Add(employee);
        return await Task.FromResult(employee);
    }

    public async Task<Employee> FindById(long id)
    {
        return await Task.FromResult(db.FirstOrDefault(x => x.Id == id)) ?? throw new EmployeeNotFoundException();
    }

    public async Task<IEnumerable<Employee>> FindAll()
    {
        return await Task.FromResult(db.Select(x => x));
    }

    public async Task<Employee> Update(Employee employee)
    {
        var existing = await FindById(employee.Id);
        db[db.IndexOf(existing)] = employee;
        return employee;
    }

    public async Task Delete(long id)
    {
        var existing = await FindById(id);
        db.Remove(existing);
    }
}
