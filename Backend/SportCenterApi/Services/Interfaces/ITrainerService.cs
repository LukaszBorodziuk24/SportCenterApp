using SportCenterApi.Models;

namespace SportCenterApi.Services.Interfaces
{
    public interface ITrainerService
    {
        Task<IEnumerable<GetTrainersDto>> GetAll(TrainersParamsDto trainersParamsDto);
    }
}