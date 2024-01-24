
namespace EmployeeManager.Domain.Models;

public class Employee
{
    public long Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string JobTitle { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string ImageUrl { get; set; } = null!;
    public string EmployeeCode { get; set; } = null!;
}
