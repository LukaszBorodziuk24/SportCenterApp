using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SportCenterApi.Entities;
using SportCenterApi.Models;
using SportCenterApi.Services.Interfaces;

namespace SportCenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BmiController : ControllerBase
    {

        private readonly IBmiService _bmiService;
        private readonly ILogger<BmiController> _logger;
        public BmiController(IBmiService bmiService, ILogger<BmiController> logger)
        {
            _bmiService = bmiService;
            _logger = logger;
        }


        [HttpPost("calculate")]
        public async Task<IActionResult> CalculateBmi([FromBody]BmiCalcDto bmiCalcDto)
            => Ok(await _bmiService.CalcBmi(bmiCalcDto));


        [Authorize]
        [HttpPost("save")]
        public async Task<IActionResult> Save([FromBody] BmiSaveDataDto bmiSaveData)
        {
            var result = await _bmiService.SaveBmi(User, bmiSaveData);

            if (result)
            {
                return Ok(result);
            }
            return Unauthorized(result);
        }

        [Authorize]
        [HttpPost("get")]
        public async Task<IActionResult> GetBmi()
        {
            var result = await _bmiService.GetBmi(User);
            var jsonResult = JsonConvert.SerializeObject(result, Formatting.Indented);
            _logger.LogInformation(jsonResult);
            return Ok(jsonResult);
        }

    }
}
