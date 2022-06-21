using System.Linq;
using AutoMapper;
using green_api.Dtos;
using green_api.Models;

namespace green_api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        { 
            CreateMap<FormtoCreateDto, Main_forms>().ReverseMap();    
            }
    }
}