using EmployeeManager.Repository.DbContexts;
using EmployeeManager.Repository.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeeManager.Repository;

public static class StartupExtensions
{
    public static IServiceCollection AddRepositoryServices(
        this IServiceCollection services, ConfigurationManager configuration)
    {
        return services
            .AddScoped<IEmployeeRepository, MockEmployeeRepository>()
            .AddEntityFrameworkNpgsql()
            .AddDbContext<EmployeeDbContext>(opt => opt
                .UseNpgsql(configuration.GetValue<string>("ConnectionStrings:DbConnection")));
    }
}
