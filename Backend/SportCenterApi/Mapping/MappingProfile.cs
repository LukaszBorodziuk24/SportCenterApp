using AutoMapper;
using SportCenterApi.Entities;
using SportCenterApi.Models;

namespace SportCenterApi.Mapping
{
    public class MappingProfile: Profile
    {
        public MappingProfile() {
            CreateMap<TrainersParamsDto, PaginationParamsDto>()
                .ForMember(dest => dest.PageNumber, opt => opt.MapFrom(src => src.PageNumber))
                .ForMember(dest => dest.PageSize, opt => opt.MapFrom(src => src.PageSize));

            CreateMap<TrainersParamsDto, FilterParamsDto>()
                .ForMember(dest => dest.FilterBy, opt => opt.MapFrom(src => src.FilterBy));

            CreateMap<TrainersParamsDto, SortParamsDto>()
                .ForMember(dest => dest.SortBy, opt => opt.MapFrom(src => src.SortBy))
                .ForMember(dest => dest.IsAscending, opt => opt.MapFrom(src => src.IsAscending));

            CreateMap<BmiSaveDataDto, BmiData>()
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.Age))
                .ForMember(dest => dest.Height, opt => opt.MapFrom(src => src.Height))
                .ForMember(dest => dest.Weight, opt => opt.MapFrom(src => src.Weight))
                .ForMember(dest => dest.DeclaredGender, opt => opt.MapFrom(src => src.DeclaredGender))
                .ForMember(dest => dest.BmiResult, opt => opt.MapFrom(src => src.BmiResult));



        }
    }
}
