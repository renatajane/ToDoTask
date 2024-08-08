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
            entity.CreatedAt = DateTime.Now;
            if (tarefa.IsCompleted == true)
            {
                entity.CompletedAt = DateTime.Now;
            }
            await tarefaRepository.Create(entity);
        }

        public async Task DeleteById(int id)
        {
            var entity = tarefaRepository.GetById(id);
            if (entity == null)
            {
                throw new Exception("Not found.");
            }
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
            if (entity == null)
            {
                throw new Exception("Not found." + id);
            }
            var dto = mapper.Map<TarefaReadDto>(entity);
            return dto;
        }

        public async Task Update(TarefaCreateDto tarefa, int id)
        {
            var entity = await tarefaRepository.GetById(id);
            if (entity == null)
            {
                throw new Exception("Not found." + id);
            }
            entity = mapper.Map<TarefaDomain>(tarefa); 
            entity.Id = id;
            if (entity.IsCompleted)
            {
                entity.CompletedAt = DateTime.Now;
            }
            await tarefaRepository.Update(entity);
        }

        public async Task Patch(TarefaCreateDto tarefa, int id)
        {
            var entity = await tarefaRepository.GetById(id);

            if (entity == null)
            {
                throw new Exception("Not found." + id);
            }

            if (tarefa.IsCompleted != null)
            {
                entity.IsCompleted = tarefa.IsCompleted.Value;
                if (tarefa.IsCompleted.Value)
                {
                    entity.CompletedAt = DateTime.Now;
                }
                else
                {
                    entity.CompletedAt = null;
                }
            }
            if (!string.IsNullOrWhiteSpace(tarefa.Title))
            {
                entity.Title = tarefa.Title;
            }
            if (!string.IsNullOrWhiteSpace(tarefa.Description))
            {
                entity.Description = tarefa.Description;
            }

            await tarefaRepository.Update(entity);
        }
    }
}
