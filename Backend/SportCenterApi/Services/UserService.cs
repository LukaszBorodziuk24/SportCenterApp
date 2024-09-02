using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SportCenterApi.Models;
using SportCenterApi.Services.Interfaces;

namespace SportCenterApi.Services
{
    public class UserService: IUserService
    {
        private readonly DbSportCenterContext _dbContext;
        private readonly UserManager<AppUser> _userManager;


        public UserService(DbSportCenterContext dbContext, UserManager<AppUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }
    }
}
