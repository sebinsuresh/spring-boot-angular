using EmployeeManager.Repository.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManager.Repository.DbContexts;

public class EmployeeDbContext : DbContext
{
    public DbSet<Employee>? Employees { get; set; }

    public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }

}
