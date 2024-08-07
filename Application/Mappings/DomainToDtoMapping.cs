using Application.Dto;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mappings
{
    public class DomainToDtoMapping : Profile
    {
        public DomainToDtoMapping()
        {
            CreateMap<Domain.TarefaDomain, TarefaReadDto>().ReverseMap();
            CreateMap<Domain.TarefaDomain, TarefaCreateDto>().ReverseMap();
        }
    }
}
