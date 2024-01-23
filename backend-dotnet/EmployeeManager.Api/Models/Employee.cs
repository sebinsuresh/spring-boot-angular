namespace EmployeeManager.Api.Models;

public class Employee
{
    // TODO: Fix warnings, figure out if Id should be nullable
    public long Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string JobTitle { get; set; }
    public string Phone { get; set; }
    public string ImageUrl { get; set; }
    public string EmployeeCode { get; set; }
}
