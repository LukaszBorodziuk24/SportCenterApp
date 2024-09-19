using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportCenterApi.Entities;
using SportCenterApi.Models;
using SportCenterApi.Models.Enums;
using SportCenterApi.Services.Interfaces;
using System.Security.Claims;

namespace SportCenterApi.Services
{
    public class BmiService : IBmiService
    {

        private readonly DbSportCenterContext _dbContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly ILogger<BmiService> _logger;
        public BmiService(DbSportCenterContext dbContext, UserManager<AppUser> userManager, IMapper mapper, ILogger<BmiService> logger)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
            _logger = logger;
        }


        public async Task<bool> SaveBmi(ClaimsPrincipal user, BmiSaveDataDto bmiSaveData)
        {
            var userId = _userManager.GetUserId(user);

            var bmiData = _mapper.Map<BmiData>(bmiSaveData);

            var appUser = await _userManager.FindByIdAsync(userId);

            bmiData.UserId = userId;
            bmiData.User = appUser;

            await _dbContext.BmiDataEntity.AddAsync(bmiData);

            var result = await _dbContext.SaveChangesAsync();

            if(result > 0)
            {
                return true;
            }
            return false;
        }

        public async Task<BmiResult> GetBmi(ClaimsPrincipal user)
        {
            var userId = _userManager.GetUserId(user);

            var bmiObj = await _dbContext.BmiDataEntity
                .Where(x => x.UserId == userId )
                .OrderByDescending(x => x.CreatedDate)
                .FirstOrDefaultAsync();

            if(bmiObj == null)
                return null;

            var bmiResult = new BmiResult
            {
                BmiCalcResult = bmiObj.BmiResult,
                BmiMsg = ClassifyBmi(bmiObj.BmiResult),
            };


            return bmiResult;

        }


        public async Task<BmiResult> CalcBmi(BmiCalcDto bmiCalcDto)
        {
            var heightInMeters = bmiCalcDto.Height / 100;
            var bmi = Math.Round((bmiCalcDto.Weight / (heightInMeters * heightInMeters)), 1);
            string category = ClassifyBmi(bmi);

            var result = new BmiResult
            {
                BmiCalcResult =  (float)bmi,
                BmiMsg = category
            };

            return result;
        }

        private string ClassifyBmi(double bmi)
        {
            if (bmi < 16) return "Severe Thinness";
            if (bmi >= 16 && bmi < 17) return "Moderate thinness";
            if (bmi < 17 && bmi < 18.5) return "Underweight";
            if (bmi >= 18.5 && bmi < 25) return "Normal";
            if (bmi >= 25 && bmi < 30) return "Overweight";
            if (bmi >= 30 && bmi < 35) return "Obese Class I";
            if (bmi >= 35 && bmi < 40) return "Obese Class II";
            return "Obese Class III";
        }
    }
}
