namespace EmployeeManager.Api.Models;

public class EmployeeRequest
{
    // TODO: Fix warnings
    public long? Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string JobTitle { get; set; }
    public string Phone { get; set; }
    public string ImageUrl { get; set; }
    public string? EmployeeCode { get; set; }
}

public class EmployeeResponse
{
    // TODO: Fix warnings
    public long Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string JobTitle { get; set; }
    public string Phone { get; set; }
    public string ImageUrl { get; set; }
    public string EmployeeCode { get; set; }
}
