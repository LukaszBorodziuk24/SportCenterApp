using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SportCenterApi.Models;
using SportCenterApi.Services.Interfaces;
using System.Linq.Expressions;

namespace SportCenterApi.Services
{
    public class TrainerService : ITrainerService
    {
        private readonly DbSportCenterContext _dbContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        public TrainerService(DbSportCenterContext dbContext, UserManager<AppUser> userManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _mapper = mapper;
        }




        public async Task<IEnumerable<GetTrainersDto>> GetAll(TrainersParamsDto trainersParamsDto)
        {
            var query = _userManager.Users.AsQueryable();

            var filterDto = _mapper.Map<FilterParamsDto>(trainersParamsDto);
            var sortDto = _mapper.Map<SortParamsDto>(trainersParamsDto);
            var paginationDto = _mapper.Map<PaginationParamsDto>(trainersParamsDto);


            if (!string.IsNullOrEmpty(filterDto.FilterBy))
            {
                query = query
                    .Where(user => user.Name.Contains(filterDto.FilterBy)  || 
                    user.LastName.Contains(filterDto.FilterBy) || 
                    user.City.Contains(filterDto.FilterBy) ||
                    user.Country.Contains(filterDto.FilterBy));
            }

            query = ApplySorting(query, sortDto.SortBy, sortDto.IsAscending);

            var result = await query
                .Skip((paginationDto.PageNumber - 1) * paginationDto.PageSize)
                .Take(paginationDto.PageSize)
                .Select(user => new GetTrainersDto
                {
                    LastName = user.LastName,
                    Name = user.Name,
                    City = user.City,
                    Country = user.Country
                })
                .ToListAsync();

            return result;
        }

        private IQueryable<AppUser> ApplySorting(IQueryable<AppUser> query, string sortBy, bool isAscending)
        {

            var sortExpressions = new Dictionary<string, Expression<Func<AppUser, object>>>()
            {
                { "lastname", user => user.LastName },
                { "name", user => user.Name },
                { "rating", user => user.Rating }
            };


            if (!string.IsNullOrEmpty(sortBy) && sortExpressions.ContainsKey(sortBy.ToLower()))
            {
                var sortExpression = sortExpressions[sortBy.ToLower()];

                query = isAscending 
                    ? query.OrderBy(sortExpression).ThenBy(user => user.Id)
                    : query.OrderByDescending(sortExpression).ThenBy(user => user.Id);
            }
            else
            {
                query = query.OrderBy(user => user.Name);
            }

            return query;
        }

    }
}