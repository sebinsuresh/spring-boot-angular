using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManager.Repository.Models;

[Table("employee")]
public class Employee
{
    [Column("id")]
    public long Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = null!;

    [Column("email")]
    public string Email { get; set; } = null!;

    [Column("job_title")]
    public string JobTitle { get; set; } = null!;

    [Column("phone")]
    public string Phone { get; set; } = null!;

    [Column("image_url")]
    public string ImageUrl { get; set; } = null!;

    [Column("employee_code")]
    public string EmployeeCode { get; set; } = null!;
}
