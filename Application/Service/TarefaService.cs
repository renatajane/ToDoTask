using Application.Dto;
using Application.Interfaces;
using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public class TarefaService : ITarefaService
    {
        private readonly ITarefaRepository tarefaRepository;
        private readonly IMapper mapper;

        public TarefaService(ITarefaRepository tarefaRepository, IMapper mapper)
        {
            this.tarefaRepository = tarefaRepository;
            this.mapper = mapper;
        }

        public async Task Create(TarefaCreateDto tarefa)
        {
            var entity = mapper.Map<TarefaDomain>(tarefa);
            await tarefaRepository.Create(entity);
        }

        public async Task DeleteById(int id)
        {
            await tarefaRepository.DeleteById(id);
        }

        public async Task<IEnumerable<TarefaReadDto>> GetAll()
        {
            var entities = await tarefaRepository.GetAll();
            var dtos = mapper.Map<IEnumerable<TarefaReadDto>>(entities);
            return dtos;
        }

        public async Task<TarefaReadDto> GetById(int id)
        {
            var entity = await tarefaRepository.GetById(id);
            var dto = mapper.Map<TarefaReadDto>(entity);
            return dto;
        }

        public async Task Update(TarefaCreateDto tarefa)
        {
            var entity = mapper.Map<TarefaDomain>(tarefa);
            await tarefaRepository.Update(entity);
        }
    }
}
