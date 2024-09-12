
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SportCenterApi.Models;
using SportCenterApi.Services.Interfaces;

namespace SportCenterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerController : ControllerBase
    {

        private readonly ITrainerService _trainerService;
        public TrainerController(ITrainerService trainerService)
        {
            _trainerService = trainerService;
        }

        [HttpGet("getAll")]
        public async Task<IActionResult> GetAll([FromQuery] TrainersParamsDto paramsDto)
        {
            var result = await _trainerService.GetAll(paramsDto);

            var jsonResult = JsonConvert.SerializeObject(result, Formatting.Indented);

            return Ok(result);
        }
    }
}