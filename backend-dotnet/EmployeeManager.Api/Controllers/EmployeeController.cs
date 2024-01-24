using EmployeeManager.Api.Mappers;
using EmployeeManager.Api.Models;
using EmployeeManager.Core.Exceptions;
using EmployeeManager.Service.Services;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManager.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(
        IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet("all")]
    public async Task<ActionResult<IEnumerable<EmployeeRequest>>> GetAll()
    {
        var response = (await _employeeService.FindAllEmployees()).Select(x => x.ToApi());
        return Ok(response);
    }

    [HttpGet("find/{id}")]
    public async Task<ActionResult<EmployeeResponse>> GetEmployeeById(long id)
    {
        try
        {
            var response = (await _employeeService.FindEmployeeById(id)).ToApi();
            return Ok(response);
        }
        catch (EmployeeNotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPost("add")]
    public async Task<ActionResult<EmployeeResponse>> AddEmployee(EmployeeRequest employee)
    {
        var response = (await _employeeService.AddEmployee(employee.ToDomain())).ToApi();
        return Created($"find/{response.Id}", response);
    }

    [HttpPut("update")]
    public async Task<ActionResult<EmployeeResponse>> UpdateEmployee(EmployeeRequest employee)
    {
        try
        {
            var response = (await _employeeService.UpdateEmployee(employee.ToDomain())).ToApi();
            return Ok(response);
        }
        catch (EmployeeNotFoundException)
        {
            return NotFound();
        }
    }

    [HttpDelete("delete/{id}")]
    public async Task<ActionResult> DeleteEmployee(long id)
    {
        try
        {
            await _employeeService.DeleteEmployee(id);
            return Ok();
        }
        catch (EmployeeNotFoundException)
        {
            return NotFound();
        }
    }
}
