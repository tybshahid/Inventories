using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Computers;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ComputersController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Computer>>> GetComputers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Computer>> GetComputer(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }
    }
}