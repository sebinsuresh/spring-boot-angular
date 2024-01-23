namespace EmployeeManager.Core.Exceptions;

public class EmployeeNotFoundException : Exception
{
    public EmployeeNotFoundException(string message = "Employee not found") : base(message) { }
}
