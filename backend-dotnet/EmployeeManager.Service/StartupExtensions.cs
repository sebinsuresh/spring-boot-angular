using EmployeeManager.Service.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeeManager.Service;

public static class StartupExtensions
{
    public static IServiceCollection AddServices(
        this IServiceCollection services,
        ConfigurationManager configuration)
    {
        return services
            .AddScoped<IEmployeeService, EmployeeService>();
    }
}
