using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SportCenterApi;
using SportCenterApi.Models;
using SportCenterApi.Services.Interfaces;
using SportCenterApi.Services;
using Microsoft.AspNetCore.Routing;
using SportCenterApi.Middleware;
using SportCenterApi.Filters;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using SportCenterApi.Mapping;
using AutoMapper;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.Formatting = Formatting.Indented;
        options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
    });

builder.Services.AddEndpointsApiExplorer();


builder.Services.AddSwaggerGen(c =>
{
    c.DocumentFilter<HideEndpointsDocumentFilter>();
});



builder.Services.AddIdentityCore<AppUser>()
    .AddEntityFrameworkStores<DbSportCenterContext>()
    .AddApiEndpoints();

builder.Services.AddDbContext<DbSportCenterContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SportCenter")));

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<AppUser>()
    .AddEntityFrameworkStores<DbSportCenterContext>();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ITrainerService, TrainerService>();

builder.Services.AddAutoMapper(typeof(MappingProfile));




builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});




var app = builder.Build();


app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseMiddleware<BlockEndpointMiddleware>();

app.UseAuthentication();

app.UseAuthorization();

app.UseSwagger();

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "SportCenter Api");
});

app.MapIdentityApi<AppUser>();

app.MapControllers();

app.Run();
