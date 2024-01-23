using DbEmployee = EmployeeManager.Repository.Models.Employee;
using DomainEmployee = EmployeeManager.Domain.Models.Employee;

namespace EmployeeManager.Service.Mappers;

public static class EmployeeMappers
{
    public static DbEmployee ToDb(this DomainEmployee employee) =>
        new()
        {
            Id = employee.Id,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode
        };

    public static DomainEmployee ToDomain(this DbEmployee employee) =>
        new()
        {
            Id = employee.Id,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode
        };

}
