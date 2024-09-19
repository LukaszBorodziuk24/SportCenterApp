using SportCenterApi.Models;
using System.Security.Claims;

namespace SportCenterApi.Services.Interfaces
{
    public interface IBmiService
    {
        Task<BmiResult> CalcBmi(BmiCalcDto bmiCalcDto);
        Task<bool> SaveBmi(ClaimsPrincipal user, BmiSaveDataDto bmiData);

        Task<BmiResult> GetBmi(ClaimsPrincipal user);
    }
}