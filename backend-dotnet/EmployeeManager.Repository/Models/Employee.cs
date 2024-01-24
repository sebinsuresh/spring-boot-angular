using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManager.Repository.Models;

// TODO: Fix warnings
[Table("employee")]
public class Employee
{
    [Column("id")]
    public long Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("email")]
    public string Email { get; set; }

    [Column("job_title")]
    public string JobTitle { get; set; }

    [Column("phone")]
    public string Phone { get; set; }

    [Column("image_url")]
    public string ImageUrl { get; set; }

    [Column("employee_code")]
    public string EmployeeCode { get; set; }
}
