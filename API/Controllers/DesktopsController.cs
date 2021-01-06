using System.Threading.Tasks;
using Application.Desktops;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class DesktopsController : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> Create(Desktop desktop)
        {
            return Ok(await Mediator.Send(new Create.Command { Desktop = desktop}));
        }
    }
}