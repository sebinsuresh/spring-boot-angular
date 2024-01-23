using ApiEmployee = EmployeeManager.Api.Models.Employee;
using DomainEmployee = EmployeeManager.Domain.Models.Employee;

namespace EmployeeManager.Api.Mappers;

public static class EmployeeMappers
{
    public static ApiEmployee ToApi(this DomainEmployee employee) =>
        new ApiEmployee
        {
            Id = employee.Id,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode,
        };

    public static DomainEmployee ToDomain(this ApiEmployee employee) =>
        new DomainEmployee
        {
            Id = employee.Id,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode,
        };
}
