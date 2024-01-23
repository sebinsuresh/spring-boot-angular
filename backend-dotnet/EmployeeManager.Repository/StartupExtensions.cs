using EmployeeManager.Repository.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace EmployeeManager.Repository;

public static class StartupExtensions
{
    public static IServiceCollection AddRepositoryServices(this IServiceCollection services)
    {
        return services
            .AddSingleton<IEmployeeRepository, MockEmployeeRepository>();
    }
}
