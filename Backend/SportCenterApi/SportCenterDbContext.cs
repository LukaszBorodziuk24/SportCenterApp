using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SportCenterApi.Models;

namespace SportCenterApi
{
    public class DbSportCenterContext : IdentityDbContext<AppUser>
    {
        public DbSportCenterContext(DbContextOptions<DbSportCenterContext> options) : base(options){ }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
