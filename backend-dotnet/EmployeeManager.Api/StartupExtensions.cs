using EmployeeManager.Repository;
using EmployeeManager.Service;

namespace EmployeeManager.Api;

public static class StartupExtensions
{
    public static IServiceCollection AddRequiredServices(
        this IServiceCollection services, ConfigurationManager configuration)
    {
        return services
            .AddRepositoryServices(configuration)
            .AddServices(configuration);
    }
}
