using ApiEmployeeRequest = EmployeeManager.Api.Models.EmployeeRequest;
using ApiEmployeeResponse = EmployeeManager.Api.Models.EmployeeResponse;
using DomainEmployee = EmployeeManager.Domain.Models.Employee;

namespace EmployeeManager.Api.Mappers;

public static class EmployeeMappers
{
    public static ApiEmployeeResponse ToApi(this DomainEmployee employee) =>
        new ApiEmployeeResponse
        {
            Id = employee.Id,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode,
        };

    public static DomainEmployee ToDomain(this ApiEmployeeRequest employee) =>
        new DomainEmployee
        {
            Id = employee.Id ?? default,
            Name = employee.Name,
            Email = employee.Email,
            JobTitle = employee.JobTitle,
            Phone = employee.Phone,
            ImageUrl = employee.ImageUrl,
            EmployeeCode = employee.EmployeeCode,
        };
}
