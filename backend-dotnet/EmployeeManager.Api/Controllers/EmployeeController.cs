using EmployeeManager.Api.Mappers;
using EmployeeManager.Api.Models;
using EmployeeManager.Service.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManager.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;
    private readonly ILogger<EmployeeController> _logger;

    public EmployeeController(
        IEmployeeService employeeService, ILogger<EmployeeController> logger)
    {
        _logger = logger;
        _employeeService = employeeService;
    }

    [HttpGet("/all")]
    public async Task<ActionResult<IEnumerable<Employee>>> GetAll()
    {
        var response = (await _employeeService.FindAllEmployees()).Select(x => x.ToApi());
        return Ok(response);
    }

    [HttpGet("/find/{id}")]
    public async Task<ActionResult<Employee>> GetEmployeeById(long id)
    {
        var response = (await _employeeService.FindEmployeeById(id)).ToApi();
        return Ok(response);
    }

    [HttpGet("/add")]
    public async Task<ActionResult<Employee>> AddEmployee(Employee employee)
    {
        var response = (await _employeeService.AddEmployee(employee.ToDomain())).ToApi();
        return Created($"/find/{response.Id}", response);
    }

    [HttpGet("/update")]
    public async Task<ActionResult<Employee>> UpdateEmployee(Employee employee)
    {
        var response = (await _employeeService.UpdateEmployee(employee.ToDomain())).ToApi();
        return Ok(response);
    }

    [HttpGet("/delete/{id}")]
    public async Task<ActionResult> DeleteEmployee(long id)
    {
        await _employeeService.DeleteEmployee(id);
        return Ok();
    }
}
