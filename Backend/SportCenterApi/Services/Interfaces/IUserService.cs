using Microsoft.AspNetCore.Identity;
using SportCenterApi.Models;

namespace SportCenterApi.Services.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> AddUser(RegisterDto model);

    }
}