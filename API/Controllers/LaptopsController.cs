using System.Threading.Tasks;
using Application.Laptops;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LaptopsController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> Create(Laptop laptop)
        {
            return Ok(await Mediator.Send(new Create.Command { Laptop = laptop}));
        }
    }
}