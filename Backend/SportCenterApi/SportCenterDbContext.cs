using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SportCenterApi.Entities;

namespace SportCenterApi
{
    public class DbSportCenterContext : IdentityDbContext<AppUser>
    {
        public DbSportCenterContext(DbContextOptions<DbSportCenterContext> options) : base(options){ }


        public DbSet<BmiData> BmiDataEntity { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<AppUser>()
            .HasMany(u => u.BmiDataCollection)
            .WithOne(b => b.User)
            .HasForeignKey(b => b.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
