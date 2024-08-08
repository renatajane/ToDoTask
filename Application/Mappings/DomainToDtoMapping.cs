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
            CreateMap<Domain.TarefaDomain, TarefaReadDto>();
            CreateMap<TarefaCreateDto, Domain.TarefaDomain>()
                .ForMember(src => src.Id, opt => opt.Ignore());
        }
    }
}
