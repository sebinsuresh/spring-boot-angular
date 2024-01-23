using EmployeeManager.Service.Services;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeeManager.Service;

public static class StartupExtensions
{
    public static IServiceCollection AddServices(this IServiceCollection services)
    {
        return services
            .AddSingleton<IEmployeeService, EmployeeService>();
    }
}
