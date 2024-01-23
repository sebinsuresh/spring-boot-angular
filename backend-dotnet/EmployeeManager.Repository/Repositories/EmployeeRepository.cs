using EmployeeManager.Core.Exceptions;
using EmployeeManager.Repository.DbContexts;
using EmployeeManager.Repository.Models;

namespace EmployeeManager.Repository.Repositories;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly EmployeeDbContext _dbContext;

    public EmployeeRepository(EmployeeDbContext dbContext)
    {
        _dbContext = dbContext;
    }

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
    private static readonly IList<Employee> _db = new List<Employee>();

    public async Task<Employee> Add(Employee employee)
    {
        employee.Id = Random.Shared.NextInt64();
        _db.Add(employee);
        return await Task.FromResult(employee);
    }

    public async Task<Employee> FindById(long id)
    {
        return await Task.FromResult(_db.FirstOrDefault(x => x.Id == id)) ?? throw new EmployeeNotFoundException();
    }

    public async Task<IEnumerable<Employee>> FindAll()
    {
        return await Task.FromResult(_db.Select(x => x));
    }

    public async Task<Employee> Update(Employee employee)
    {
        var existing = await FindById(employee.Id);
        _db[_db.IndexOf(existing)] = employee;
        return employee;
    }

    public async Task Delete(long id)
    {
        var existing = await FindById(id);
        _db.Remove(existing);
    }
}
