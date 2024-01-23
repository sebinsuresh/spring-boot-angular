using EmployeeManager.Repository;
using EmployeeManager.Service;

namespace EmployeeManager.Api;

public static class StartupExtensions
{
    public static IServiceCollection AddRequiredServices(this IServiceCollection services)
    {
        return services
            .AddRepositoryServices()
            .AddServices();
    }
}
