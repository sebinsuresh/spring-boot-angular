namespace EmployeeManager.Api.Models;

public class EmployeeRequest
{
    // TODO: Fix warnings
    public long? Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string JobTitle { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string ImageUrl { get; set; } = null!;
}

public class EmployeeResponse
{
    public long Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string JobTitle { get; set; } = null!;
    public string Phone { get; set; } = null!;
    public string ImageUrl { get; set; } = null!;
    public string EmployeeCode { get; set; } = null!;
}
